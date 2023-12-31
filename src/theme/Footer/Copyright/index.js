/* 备注：
Copyright 是网页底部的一排文字信息，例如：
Copyright © 2023 DGoeee | All rights reserved. | v1.3.1-beta2-0.0.0
默认情况是全部信息都能在 config 中修改，但是 config 中并无活物
也就是说比如版本号，不能随着我设定的整个项目的版本而灵活变更
需要我每次更换版本号的时候都去修改 Copyright 的信息
于是我对默认的 Copyright 组件进行了修改，在默认信息之后添加了版本号
也就是 copyright + useDocusaurusContext().siteMetadata.siteVersion
其中 copyright 是 config 中的信息，后面的一长串会自动转换成版本号
*/
import React from 'react';

// 引入环境中的信息，这里是为了获得项目版本号
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function FooterCopyright({ copyright }) {
  return (
    <div
      className="footer__copyright"
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: copyright + useDocusaurusContext().siteMetadata.siteVersion,
      }}
    />
  );
}
