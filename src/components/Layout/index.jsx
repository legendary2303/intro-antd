import React from 'react';
import { Col,Row } from 'antd';
import './Layout.css'
import FormLogin from '../../FormLogin';
import Imagendefondo from '../../ImageLogin/imagen';

const LayoutComponent = () => {
    return (
        <div className="Layout-container">
            <Row>
                <Col xs={0} sm={0} md={4} lg={6}>
                    <div className="content-left">
                        <Imagendefondo/>
                    </div>
                </Col>
            
            
                <Col xs={24} sm={24} md={20} lg={18}>
                <div className="content-right">
                        <FormLogin/>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default LayoutComponent;