import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import WomenList from './WomenList';
const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];



const Women = () => (
    <>
    <div className="flex">
    <div className='h-[26em] w-[20em]  relative my-10'>
    <div className='ml-2 tracking-widest'>
    <Dropdown
      menu={{
        items,
      }}
      trigger={['click']}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          BRAND
          <DownOutlined className='absolute right-2'/>
          <hr />
        </Space>
      </a>
    </Dropdown>
    </div>

    <hr className='border-t-2  my-2'/>


    <div className='ml-2 tracking-widest'>
    <Dropdown
      menu={{
        items,
      }}
      trigger={['click']}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          CATAGORY
          <DownOutlined className='absolute right-2'/>
          <hr />
        </Space>
      </a>
    </Dropdown>
    </div>

    <hr className='border-t-2  my-2'/>


    <div className='ml-2 tracking-widest'>
    <Dropdown
      menu={{
        items,
      }}
      trigger={['click']}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          AVAILABLITY
          <DownOutlined className='absolute right-2'/>
          <hr />
        </Space>
      </a>
    </Dropdown>
    </div>

    <hr className='border-t-2  my-2'/>


    <div className='ml-2 tracking-widest'>
    <Dropdown
      menu={{
        items,
      }}
      trigger={['click']}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          GENDER
          <DownOutlined className='absolute right-2'/>
          <hr />
        </Space>
      </a>
    </Dropdown>
    </div>

    <hr className='border-t-2  my-2'/>



    <div className='ml-2 tracking-widest'>
    <Dropdown
      menu={{
        items,
      }}
      trigger={['click']}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          CONCENTRATION TYPE
          <DownOutlined className='absolute right-2'/>
          <hr />
        </Space>
      </a>
    </Dropdown>
    </div>

    <hr className='border-t-2  my-2'/>


    <div className='ml-2 tracking-widest'>
    <Dropdown
      menu={{
        items,
      }}
      trigger={['click']}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          FRAGRANCE FAMILY
          <DownOutlined className='absolute right-2'/>
          <hr />
        </Space>
      </a>
    </Dropdown>
    </div>

    <hr className='border-t-2  my-2'/>

    <div className='ml-2 tracking-widest'>
    <Dropdown
      menu={{
        items,
      }}
      trigger={['click']}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          PRICE
          <DownOutlined className='absolute right-2'/>
          <hr />
        </Space>
      </a>
    </Dropdown>
    </div>

    <hr className='border-t-2  my-2'/>
</div>
    <div className='flex-1'>
    <WomenList />
    </div>
    </div>

    </>
  );
  export default Women;