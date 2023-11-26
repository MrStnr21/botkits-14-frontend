import React, { ReactNode, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import { cx, css } from '@emotion/css';

interface BaseProps {
  className: string;
  [key: string]: unknown;
}
// type OrNull<T> = T | null; не пригодилось

export const Button = React.forwardRef(
  (
    {
      className,
      active,
      reversed,
      ...props
    }: PropsWithChildren<
      {
        active: boolean;
        reversed: boolean;
      } & BaseProps
    >,
    ref: React.Ref<HTMLSpanElement> // пофикшено, было Ref<OrNull<HTMLSpanElement>>
  ) => (
    <span
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          cursor: pointer;
          color: ${reversed
            ? active
              ? 'white'
              : '#aaa'
            : active
            ? 'black'
            : '#ccc'};
        `
      )}
    />
  )
);

export const Icon = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: React.Ref<HTMLSpanElement> // и тут
  ) => (
    <span
      {...props}
      ref={ref}
      className={cx(
        'material-icons',
        className,
        css`
          font-size: 18px;
          vertical-align: text-bottom;
        `
      )}
    />
  )
);

export const Menu = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: React.Ref<HTMLDivElement> // и тут
  ) => (
    <div
      {...props}
      data-test-id="menu"
      ref={ref}
      className={cx(
        className,
        css`
          & > * {
            display: inline-block;
          }

          & > * + * {
            margin-left: 15px;
          }
        `
      )}
    />
  )
);

export const Portal = ({ children }: { children?: ReactNode }) => {
  return typeof document === 'object'
    ? ReactDOM.createPortal(children, document.body)
    : null;
};
