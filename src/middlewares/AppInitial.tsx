import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const AppInitial: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};
