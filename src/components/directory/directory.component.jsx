import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'cookies',
                imageUrl: 'https://images.unsplash.com/photo-1576186726672-fd51b981b116?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=320',
                id: 1,
                linkUrl: 'shop/cookies'
              },
              {
                title: 'pastries',
                imageUrl: 'https://images.unsplash.com/photo-1602077812176-1bd3ff433d74?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=320',
                id: 2,
                linkUrl: 'shop/jackets'
              },
              {
                title: 'brownies',
                imageUrl: 'https://images.unsplash.com/photo-1515037893149-de7f840978e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=320',
                id: 3,
                linkUrl: 'shop/sneakers'
              },
              {
                title: 'chinese new year',
                imageUrl: 'https://images.unsplash.com/photo-1517102183434-58e6be84ba50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=490',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens'
              },
              {
                title: 'all-time-favourites',
                imageUrl: 'https://images.unsplash.com/photo-1557925923-6982bd9650ff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=593',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
              }

            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;