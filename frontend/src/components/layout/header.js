import { Layout, Typography, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Title } = Typography;

const { Header } = Layout;

export const SkeletonHeader = ({ onSearch }) => <Header className="layout-header">
    <Title level={3}>
        Walmart Search
    </Title>
    <Input prefix={<SearchOutlined />} onChange={onSearch} />
</Header>
