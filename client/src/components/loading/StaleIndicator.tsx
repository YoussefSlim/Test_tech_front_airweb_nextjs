import React from 'react';

import classNames from 'classnames';

export function StaleIndicator({
  children,
  isValidating,
}: {
  isValidating: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={classNames({
        'blur-sm': isValidating,
      })}
    >
      {children}
    </div>
  );
}
