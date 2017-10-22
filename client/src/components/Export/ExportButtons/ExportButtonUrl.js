// @flow
import React from 'react';
import UISelectableButton from '../../../UILibrary/button/UISelectableButton';
import FaChain from 'react-icons/lib/fa/chain';
import exportOptionsKeys from '../exportOptionsKeys';

type Props = {
  +onClick: (key: string) => {},
};

class ExportButtonUrl extends React.Component<Props> {
  handleClick = (e) => {
    e.preventDefault();

    this.props.onClick(exportOptionsKeys.URL);
  }

  render() {
    return (
      <UISelectableButton
        icon={FaChain}
        onClick={this.handleClick}
      >
        URL
      </UISelectableButton>
    );
  }
}


export default ExportButtonUrl
