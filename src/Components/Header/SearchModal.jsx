import React, { useState } from 'react';
import { Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import WomenList from '../../Section/Women/WomenList';

const SearchModal = ({ onClose }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    onClose(); 
  };

  return (
    <Modal
      title="Search Product"
      centered
      visible={visible}
      closable={true}
      maskClosable={true}
      onOk={() => handleClose()}
      onCancel={() => handleClose()}
      width="100%"
      footer={null}
      style={{ top: 40 }} // Adjust the top position as needed
    >
      <div className=" items-center relative">
        <input
          type="search"
          className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Search..."
          style={{ appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none' }} 
        />
        <SearchOutlined style={{ fontSize: '20px', color: '#1890ff', marginLeft: '-35px', zIndex: '1' }} />
        <style>
          {`
            input[type="search"]::-webkit-search-cancel-button {
              -webkit-appearance: none;
              appearance: none;
              display: none;
            }
          `}
        </style>
        <div>
            <WomenList />
        </div>
      </div>
    </Modal>
  );
};

export default SearchModal;
