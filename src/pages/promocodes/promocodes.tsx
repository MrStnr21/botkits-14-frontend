import { ChangeEvent, FC, useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import stylesPromocodes from './promocodes.module.scss';
import Typography from '../../ui/typography/typography';
import EnhancedTable from '../../components/enhanced-table/enhanced-table';
import { ppHeadCell } from '../../components/table-cells/table-cells';
import {
  promoCellStyle,
  promoColumns,
  promoDropdownValues,
  promoHeaderTitle,
  promoRowStyleRef,
  promoTableModalButtons,
} from './promocodesConfig';
import Input from '../../ui/inputs/input/input';
import ButtonBotTemplate from '../../ui/buttons/button-bot-template/button-bot-template';

type TPromocodes = {
  id: string;
  date: string;
  promo: string;
  price: string;
  status: boolean;
  menu: boolean;
};

const Promocodes: FC = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('');
  const [promocodes, setPromocodes] = useState<TPromocodes[]>([]);

  // логика для фильтрации отображаемых строк в таблице с промокодами,
  // при создании страницы promocodes вынести в компонент страницы
  const [filterValue, setFilterValue] = useState<string>('all');

  const handleFilterChange = (value: string) => {
    setFilterValue(value);
  };

  const hours = new Date().getHours().toString().padStart(2, '0');
  const minutes = new Date().getMinutes().toString().padStart(2, '0');
  const now = `${new Date().toLocaleDateString('ru-RU')} 
  ${hours}:${minutes}`;

  const createPromocode = (value: string) => {
    const getInput = document.getElementById('input') as HTMLInputElement;
    getInput.value = '';

    const obj = [
      {
        id: uuidv4(),
        date: now,
        promo: value,
        price: '30р',
        status: true,
        menu: true,
      },
    ];
    return obj;
  };

  const handleGeneratePromocode = () => {
    setPromocodes(createPromocode(inputValue));
  };

  const renderFilteredRows = () => {
    switch (filterValue) {
      case 'all':
        return promocodes;
      case 'inactive':
        return promocodes!.filter((row) => row.status === false);
      case 'active':
        return promocodes!.filter((row) => row.status === true);
      default:
        return promocodes;
    }
  };

  return (
    <div className={stylesPromocodes.page}>
      <Typography
        tag="h2"
        fontFamily="secondary"
        className={stylesPromocodes.page__heading}
      >
        Промокоды
      </Typography>
      <div className={stylesPromocodes.container}>
        <div className={stylesPromocodes.menue}>
          <Typography
            tag="h4"
            fontFamily="secondary"
            className={stylesPromocodes.menue__title}
          >
            Cгенерируйте промокод
          </Typography>
          <div className={stylesPromocodes.input}>
            <Input
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                setInputValue(evt.target.value)
              }
              placeholder="Введите промокод"
              errorMessage="Вы не сгенерировали промокод"
              styled="main"
              id="input"
            />
          </div>
          <div className={stylesPromocodes.button}>
            <ButtonBotTemplate
              buttonHtmlType="submit"
              onClick={() => {
                handleGeneratePromocode();
              }}
              color="blue"
            >
              СГЕНЕРИРОВАТЬ ПРОМОКОД
            </ButtonBotTemplate>
          </div>
        </div>
        <div>
          <div className={stylesPromocodes.promocodeTable}>
            <EnhancedTable
              check
              header
              dropdown
              columns={promoColumns}
              headComponent={ppHeadCell}
              tableData={renderFilteredRows()}
              rowStyle={promoRowStyleRef}
              cellStyle={promoCellStyle}
              shadow={0}
              onFilterChange={handleFilterChange}
              menuOptions={promoTableModalButtons}
              tableHeaderTitle={promoHeaderTitle}
              headerOptions={promoDropdownValues}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promocodes;
