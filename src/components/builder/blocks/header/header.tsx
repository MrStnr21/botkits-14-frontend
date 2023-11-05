import React, { useState } from 'react';
import styles from './header.module.scss';
import ConstructorAddButton from '../../../../ui/buttons/constructor-add-button/constructor-add-button';
import Input from '../../../../ui/inputs/input/input';

const HeaderBlock = () => {
  const [vartitle, setVarTitle] = useState('');
  const [varnumber, setVarNumber] = useState('');
  const [consttitle, setConstTitle] = useState('');
  const [constnumber, setConstNumber] = useState('');

  const handleVarTitleChange = (e: any) => {
    setVarTitle(e.target.value);
  };

  const handleVarNumberChange = (e: any) => {
    setVarNumber(e.target.value);
  };

  const handleConstTitleChange = (e: any) => {
    setConstTitle(e.target.value);
  };

  const handleConstNumberChange = (e: any) => {
    setConstNumber(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Заголовок</h3>
      <div className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.griditem}>
            <ConstructorAddButton>Переменная</ConstructorAddButton>
          </div>
          <div className={styles.inputs}>
            <Input
              placeholder="Заголовок"
              value={vartitle}
              onChange={handleVarTitleChange}
              type="bot-builder-default"
              styled="bot-builder-default"
            />
            <Input
              placeholder="Переменная"
              value={varnumber}
              onChange={handleVarNumberChange}
              type="bot-builder-default"
              styled="bot-builder-default"
            />
          </div>
          <div className={styles.griditem}>
            <ConstructorAddButton>Переменная</ConstructorAddButton>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.griditem}>
            <ConstructorAddButton>Постоянная</ConstructorAddButton>
          </div>
          <div className={styles.inputs}>
            <div className={styles.input}>
              <Input
                placeholder="Заголовок"
                value={consttitle}
                onChange={handleConstTitleChange}
                type="bot-builder-default"
                styled="bot-builder-default"
              />
            </div>
            <div className={styles.input}>
              <Input
                placeholder="Постоянная"
                value={constnumber}
                onChange={handleConstNumberChange}
                type="bot-builder-default"
                styled="bot-builder-default"
              />
            </div>
          </div>
          <div className={styles.griditem}>
            <ConstructorAddButton>Постоянная</ConstructorAddButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBlock;
