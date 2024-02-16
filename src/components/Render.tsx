import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom';
import { Pages } from '../types';
import axiosApi from '../AxiosApi';


const Render: React.FC = () => {
    const [pages, setPages] = useState<Pages[]>([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchPages = async () => {
            let url = '/pages.json'
            try {
                url += `?orderBy="id"&equalTo="${id}"`
                const res = await axiosApi.get(url);
                console.log(res);
                const resData = Object.keys(res.data)
                setPages([resData]);
            } catch (e) {
                console.log(e);
            }
        };
        fetchPages();
    }, [id])

    if (pages.length === 0) {
        return <h1>No content</h1>
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">My Navigation</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    {pages.map((page, index) => (
                            <NavLink key={index} to={`/${page.title}`} className='border-start border-end border-black ps-2 pe-2 pt-2 text-dark'>{page.title}</NavLink>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Render