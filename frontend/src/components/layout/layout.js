import { Layout } from 'antd';
import { SkeletonHeader } from './header';
import './layout.css';

const { Content, Footer } = Layout;


export const LayoutMain = ({ children, onSearch }) => <Layout className="layout-main">
    <SkeletonHeader onSearch={onSearch} />
    <Layout>
        <Content>{ children }</Content>
    </Layout>
    <Footer>Copyright 2021</Footer>
</Layout>

export default LayoutMain;