import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const PageInitial: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};
