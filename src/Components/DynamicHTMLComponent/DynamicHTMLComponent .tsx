import React from 'react';
import { useStyles } from './styles';

interface DynamicHTMLComponentProps {
  htmlContent: string;
}

const DynamicHTMLComponent: React.FC<DynamicHTMLComponentProps> = ({ htmlContent }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.scrollableContainer}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default DynamicHTMLComponent;
