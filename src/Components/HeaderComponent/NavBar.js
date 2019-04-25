import React, { Component } from 'react';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';

class NavBar extends Component {
  render() {
    return (
      <div>
        <CommandBar
          items={this.getItems()}
          overflowItems={this.getOverlflowItems()}
          overflowButtonProps={{ ariaLabel: 'More commands' }}
          farItems={this.getFarItems()}
          ariaLabel={'Use left and right arrow keys to navigate between commands'}
        />
      </div>
    );
  }

  // Data for CommandBar
  getItems = () => {
    return [
      {
        key: 'home',
        name: 'Home',
        cacheKey: 'myCacheKey', // changing this key will invalidate this items cache
        iconProps: {
          iconName: 'Home'
        },
        href: '/',
        ariaLabel: 'Home'
      },
      {
        key: 'about',
        name: 'About',
        iconProps: {
          iconName: 'About'
        },
        href: '/about'
      },
      {
        key: 'contact',
        name: 'Contact',
        iconProps: {
          iconName: 'Contact'
        },
        href: '/contact'
      }
    ];
  };

  getOverlflowItems = () => {
    return [
      {
        key: 'move',
        name: 'Move to...',
        onClick: () => console.log('Move to'),
        iconProps: {
          iconName: 'MoveToFolder'
        }
      },
      {
        key: 'copy',
        name: 'Copy to...',
        onClick: () => console.log('Copy to'),
        iconProps: {
          iconName: 'Copy'
        }
      },
      {
        key: 'rename',
        name: 'Rename...',
        onClick: () => console.log('Rename'),
        iconProps: {
          iconName: 'Edit'
        }
      }
    ];
  };

  getFarItems = () => {
    return [
      {
        key: 'sort',
        name: 'Sort',
        ariaLabel: 'Sort',
        iconProps: {
          iconName: 'SortLines'
        },
        onClick: () => console.log('Sort')
      },
      {
        key: 'tile',
        name: 'Grid view',
        ariaLabel: 'Grid view',
        iconProps: {
          iconName: 'Tiles'
        },
        iconOnly: true,
        onClick: () => console.log('Tiles')
      },
      {
        key: 'info',
        name: 'Info',
        ariaLabel: 'Info',
        iconProps: {
          iconName: 'Info'
        },
        iconOnly: true,
        onClick: () => console.log('Info')
      }
    ];
  };
}

export default NavBar;