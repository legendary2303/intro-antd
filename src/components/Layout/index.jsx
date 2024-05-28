import React from 'react';
import { Col,Row } from 'antd';
import './Layout.css'
import FormLogin from '../../FormLogin';
import Imagendefondo from '../../ImageLogin/imagen';


const LayoutComponent = ({leftColSize,rightColSize,leftContent,rightContent}) => {
    return (
        <div className="Layout-container">
            <Row>
                <Col xs={leftColSize.xs} sm={leftColSize.sm} md={leftColSize.md} lg={leftColSize.lg}>
                    <div className="content-left">
                        {leftContent}
                    </div>
                </Col>
            
            
                <Col xs={rightColSize.xs} sm={rightColSize.sm} md={rightColSize.md} lg={rightColSize.lg}>
                <div className="content-right">
                        {rightContent}
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default LayoutComponent;