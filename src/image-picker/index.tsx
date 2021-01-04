import React, { useState, useEffect, useRef, useMemo } from 'react';
import { withStyles, ClassKeysOfStyles } from '@wonder-ui/styles';
import classnames from 'classnames';
import WxImageViewer from 'react-wx-images-viewer';
import { Toast } from 'antd-mobile';

import styles from './styles';

const noon = () => {};

interface Files {
  url: string; // 图片url
  loading?: boolean; // 图片是否加载中
  errorTip?: string; // 错误提示
  name?: string; // 图片名称
  [index: string]: any;
}

interface ImagePickerProps {
  filesList: Array<Files>; // 图片列表
  max?: number; // 图片最大个数
  onChange?: (arr: Array<Files>) => any; // 图片列表改变
  onUpload?: (file: any) => Promise<object | undefined>; // 图片上传方法
  accept?: string; // 选择的图片类型
  multiple?: boolean; // 是否多选
  width?: string; // 图片宽度，默认80px
  height?: string | number; // 图片高度，默认80px
  config?: string[]; // 图片的额外扩展项,defaultBackGround: 显示默认背景色, defaultDashed: 显示虚线边框, defaultBorder: 显示实线边框
  children?: React.ReactNode; // 选择图片元素，默认为+
  mode?: string; // 图片裁切类型, fill, cover, contain, scale-down
  size?: number; // 图片大小限制，单位: M
  onFail?: (e: any) => any;
  resize?: boolean;

  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
  // classes?: Record<'root' | 'input' | 'imgBox', any>
}

const ImagePicker = (props: ImagePickerProps) => {
  const {
    filesList = [],
    classes: s = {},
    max = 1,
    onChange = noon,
    accept = 'image/*',
    multiple,
    width = '80px',
    height = '80px',
    config = ['defaultBorder'],
    children,
    mode = 'fill',
    size,
    onUpload,
    onFail = noon,
    resize,
  } = props;

  const ref = useRef<any>(null);
  const refDom = useRef<any>(null);
  const refFilesList = useRef<Array<Files>>(filesList);

  const urlList: string[] = [];
  refFilesList.current.forEach((item: Files) => {
    if (item.url) {
      urlList.push(item.url);
    }
  });

  // 有效个数
  const validLength = useMemo(() => {
    let num = 0;
    for (let i = 0; i < filesList.length; i++) {
      const { url, errorTip } = filesList[i];
      if (url || errorTip) {
        num++;
      }
    }
    return num;
  }, [filesList]);

  const [isOpen, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [realHeight, setRealHeight] = useState<string>('');

  // init
  useEffect(() => {
    const calcWidth = getComputedStyle(refDom.current).width;
    setRealHeight(calcWidth);
  }, []);

  // 图片处理
  const parseFile = (file: any, index: number) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = e => {
        const dataURL = (e.target as any).result;
        if (!dataURL) {
          reject(`Fail to get the ${index} image`);
          return;
        }
        resolve({ url: dataURL, file });
      };
      reader.readAsDataURL(file);
    });
  };

  // 图片改变
  const onChangeHandle = (e: any) => {
    const fileSelectorEl = e.target;
    const { files } = fileSelectorEl;
    if (!files || !files.length) {
      return (fileSelectorEl.value = '');
    }
    console.log('files', files);
    const restNum = max - validLength;
    if (files.length > restNum) {
      Toast.info(`图片最多不超过${max}张`);
    }
    const restFileList = Array.from(files).slice(0, restNum);
    const imageParsePromiseList = [];
    for (let i = 0; i < restFileList.length; i++) {
      imageParsePromiseList.push(parseFile(restFileList[i], i));
    }
    refFilesList.current = refFilesList.current.filter(
      item => item.url || item.errorTip,
    ); // 过滤有效值
    const index = refFilesList.current.length;
    Promise.all(imageParsePromiseList)
      .then((imageItems: any[]) => {
        if (onUpload) {
          imageItems.forEach((item: Files) => (item.loading = true));
        }
        const filterList = imageItems.filter((item: Files) => {
          console.log('item.size', item.file.size);
          if (size && item.file.size > size * 1024 * 1024) {
            return Toast.info(`图片大小不能超过${size}M`);
          }
          return item;
        });
        refFilesList.current = refFilesList.current.concat(filterList);
        onChange(refFilesList.current);
        if (onUpload) {
          for (let i = 0; i < refFilesList.current.length; i++) {
            const item = refFilesList.current[i];
            if (i >= index) {
              onUpload(item.file)
                .then((res: any) => {
                  refFilesList.current[i] = Object.assign(
                    {},
                    refFilesList.current[i],
                    res,
                    { loading: false },
                  );
                  refFilesList.current = [...refFilesList.current];
                  setTimeout(() => {
                    onChange(refFilesList.current);
                  }, 10);
                })
                .catch(err => {
                  refFilesList.current[i] = {
                    url: '',
                    loading: false,
                    errorTip: err || '上传失败，请重试',
                  };
                  refFilesList.current = [...refFilesList.current];
                  setTimeout(() => {
                    onChange(refFilesList.current);
                  }, 10);
                });
            }
          }
        }
        fileSelectorEl.value = '';
      })
      .catch(error => {
        onFail(error);
        fileSelectorEl.value = '';
      });
  };

  // 选择图片
  const inputClick = () => {
    ref && ref.current && ref.current.click();
  };

  // 删除图片
  const onRemove = (index: number) => {
    let ableDelete = true;
    for (let i = 0; i < refFilesList.current.length; i++) {
      const { loading } = refFilesList.current[i];
      if (loading) {
        ableDelete = false;
        break;
      }
    }
    if (!ableDelete) {
      return Toast.info('图片上传中，请稍后操作');
    }
    refFilesList.current.splice(index, 1);
    refFilesList.current = [...refFilesList.current];
    onChange(refFilesList.current);
  };

  // 预览图片
  const preview = (index: number) => {
    console.log('index', index);
    setIndex(index);
    onClose();
  };

  // 关闭图片预览
  const onClose = () => setOpen(val => !val);

  enum configProp {
    defaultBorder = 'defaultBorder',
    defaultBackGround = 'defaultBackGround',
    defaultDashed = 'defaultDashed',
  }

  enum objectFitProp {
    fill = 'fill',
    cover = 'cover',
    contain = 'contain',
    'scale-down' = 'scale-down',
  }

  const calcHeight = resize ? realHeight : height;

  return (
    <div className={s.root}>
      <input
        className={s.hidden}
        ref={ref}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={onChangeHandle}
      />
      {filesList &&
        filesList.length > 0 &&
        filesList.map((item: Files, index: number) => {
          const { url, loading, name, errorTip } = item;
          if (url || errorTip) {
            const currentArr = filesList.slice(0, index + 1);
            let errorNum = 0;
            for (let i = 0; i < currentArr.length; i++) {
              const { errorTip } = currentArr[i];
              if (errorTip) {
                errorNum++;
              }
            }
            const currentIndex = index - errorNum;
            return (
              <div
                key={index}
                className={classnames(s.parent, {
                  [s.noMargin as string]: max === 1 || filesList.length < 1,
                })}
                style={{ width }}
              >
                <div className={s.imgBox} style={{ height: calcHeight }}>
                  {url && (
                    <img
                      alt=""
                      className={s.img}
                      src={url}
                      style={{ objectFit: mode as objectFitProp }}
                      onClick={() => preview(currentIndex)}
                    />
                  )}
                  {errorTip && (
                    <div className={s.errorTip} style={{ height: calcHeight }}>
                      {errorTip}
                    </div>
                  )}
                  <i className={s.iconRemove} onClick={() => onRemove(index)} />
                  {loading && (
                    <div className={s.loadingBox}>
                      <i className={s.loading} />
                    </div>
                  )}
                </div>
                {name && <div className={s.name}>{name}</div>}
              </div>
            );
          }
        })}
      {validLength < max && (
        <div
          className={classnames(s.parent, {
            [s.noMargin as string]: max === 1 || filesList.length < 1,
          })}
          style={{ width }}
          ref={refDom}
          onClick={inputClick}
        >
          {children ? (
            children
          ) : (
            <div
              style={{ height: calcHeight }}
              className={classnames(s.childrenEle, [
                ...config.map(todo => {
                  return s[todo as configProp];
                }),
              ])}
            />
          )}
          {max === 1 && filesList[0] && filesList[0].name && (
            <div className={s.name} style={{ width }}>
              {filesList[0].name}
            </div>
          )}
        </div>
      )}
      {isOpen && (
        <WxImageViewer onClose={onClose} index={index} urls={urlList} />
      )}
    </div>
  );
};

export default withStyles(styles)(ImagePicker);
