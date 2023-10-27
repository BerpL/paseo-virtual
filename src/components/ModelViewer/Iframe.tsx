
import React, { FC, Fragment } from 'react';

import Preloader from '../Preloader'

interface IframeProps {
  url: string;
  title: string;
}

export const Iframe: FC<IframeProps> = ({ url, title }) => {
  return (
    <Fragment key={url}>
      <iframe
        src={url}
        className="viewer__iframe__content"
        frameBorder="0"
        title={title} />
      <Preloader />
    </Fragment>
  )
}
