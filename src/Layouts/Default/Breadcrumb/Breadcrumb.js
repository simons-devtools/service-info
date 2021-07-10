import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { Container } from '@material-ui/core';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const Breadcrumb = () => {
    return (
        <Container>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                    Material-UI
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                    Core
                </Link>
                <Link
                    color="textPrimary"
                    href="/components/breadcrumbs/"
                    onClick={handleClick}
                    aria-current="page"
                >
                    Breadcrumb
                </Link>
            </Breadcrumbs>
        </Container>
    );
}
export default Breadcrumb;