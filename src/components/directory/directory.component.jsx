import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'cookies',
          imageUrl: 'https://images.unsplash.com/photo-1590080874088-eec64895b423?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=271',
          id: 1,
          linkUrl: 'cookies'
        },
        {
          title: 'pastries',
          imageUrl: 'https://images.unsplash.com/photo-1530006261244-0ae043004358?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=271',
          id: 2,
          linkUrl: 'pastries'
        },
        {
          title: 'brownies',
          imageUrl: 'https://images.unsplash.com/photo-1515037893149-de7f840978e2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=271',
          id: 3,
          linkUrl: 'brownies'
        },
        {
          title: 'chinese new year',
          imageUrl: 'https://images.unsplash.com/photo-1517102183434-58e6be84ba50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=490',
          size: 'large',
          id: 4,
          linkUrl: 'cny'
        },
        {
          title: 'all-time-favourites',
          imageUrl: 'https://images.unsplash.com/photo-1475855841503-917d97ca77b4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=490',
          size: 'large',
          id: 5,
          linkUrl: 'favourites'
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
