import React from 'react';
import './CategoryList.css'
import { NavLink } from 'react-router-dom';
import { Button, ButtonGroup } from '@mui/material';

const CategoryList = (props) => {

    return (
        <div className="category-list">
            <ButtonGroup color="error" variant="text" aria-label="text button group">
                {
                    props.categories.map((cat) => {
                        return (
                            <NavLink to={cat.path} exact activeClassName="selected">
                                <Button color="error">{cat.description}</Button>
                            </NavLink>
                        )
                    })
                }
            </ButtonGroup>
        </div>
    );
}

export default CategoryList;