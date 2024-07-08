import React, { useState, useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Button } from 'antd';
import MenList from './MenList';
import ToggleFilterTwo from '../Women/ToggleFilterTwo';
import ArmafData from '../../Data/armaf-products.json'

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

const Men = () => {

  const [data, setData] = useState({})
  const [showFilters, setShowFilters] = useState(false);
  const [showFiltersTwo, setShowFiltersTwo] = useState(false);

  useEffect(() => {
    setData(ArmafData);
  }, []);

  useEffect(() => {
    console.log('armaf', data.products);
  }, [data]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  },[])


  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const toggleFiltersTwo = () => {
    setShowFiltersTwo(!showFiltersTwo);
  };

  return (
    <>




      <div className="flex justify-center my-6">
        <h2 className="text-[25px] font-bold text-center w-[9em] tracking-wide">Men-Niche & Designer Perfume</h2>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:h-[26em] lg:w-[20em] relative my-10">
          <div className='flex gap-4 mx-6 md:hidden'>
            <Button className="lg:hidden mb-2 border-2 rounded-[50px] p-5 text-[18px]" onClick={toggleFilters}>
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>

            <div className={`ml-2 mt-2 tracking-widest lg:block`}>
            <ToggleFilterTwo  />
          </div>
          </div>

          

          <div className={`ml-2 tracking-widest ${showFilters ? 'block' : 'hidden'} lg:block`}>
            <Dropdown menu={{ items }} trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  BRAND
                  <DownOutlined className="absolute right-2" />
                </Space>
              </a>
            </Dropdown>
            <hr className="border-t-2 my-2" />
          </div>
          <div className={`ml-2 tracking-widest ${showFilters ? 'block' : 'hidden'} lg:block`}>
            <Dropdown menu={{ items }} trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  CATEGORY
                  <DownOutlined className="absolute right-2" />
                </Space>
              </a>
            </Dropdown>
            <hr className="border-t-2 my-2" />
          </div>
          <div className={`ml-2 tracking-widest ${showFilters ? 'block' : 'hidden'} lg:block`}>
            <Dropdown menu={{ items }} trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  AVAILABILITY
                  <DownOutlined className="absolute right-2" />
                </Space>
              </a>
            </Dropdown>
            <hr className="border-t-2 my-2" />
          </div>
          <div className={`ml-2 tracking-widest ${showFilters ? 'block' : 'hidden'} lg:block`}>
            <Dropdown menu={{ items }} trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  GENDER
                  <DownOutlined className="absolute right-2" />
                </Space>
              </a>
            </Dropdown>
            <hr className="border-t-2 my-2" />
          </div>
          <div className={`ml-2 tracking-widest ${showFilters ? 'block' : 'hidden'} lg:block`}>
            <Dropdown menu={{ items }} trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  CONCENTRATION TYPE
                  <DownOutlined className="absolute right-2" />
                </Space>
              </a>
            </Dropdown>
            <hr className="border-t-2 my-2" />
          </div>
          <div className={`ml-2 tracking-widest ${showFilters ? 'block' : 'hidden'} lg:block`}>
            <Dropdown menu={{ items }} trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  FRAGRANCE FAMILY
                  <DownOutlined className="absolute right-2" />
                </Space>
              </a>
            </Dropdown>
            <hr className="border-t-2 my-2" />
          </div>
          <div className={`ml-2 tracking-widest ${showFilters ? 'block' : 'hidden'} lg:block`}>
            <Dropdown menu={{ items }} trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  PRICE
                  <DownOutlined className="absolute right-2" />
                </Space>
              </a>
            </Dropdown>
            <hr className="border-t-2 my-2" />
          </div>
        </div>
        <div className="flex-1">
          <MenList />
        </div>
      </div>
    </>
  );
};

export default Men;
