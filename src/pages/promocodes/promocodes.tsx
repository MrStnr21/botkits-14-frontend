import { ChangeEvent, FC, FormEvent, useState } from 'react';
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
  now,
} from './promocodesConfig';
import Input from '../../ui/inputs/input/input';
import ButtonBotTemplate from '../../ui/buttons/button-bot-template/button-bot-template';
import { TPromocodes } from '../../utils/types';

const Promocodes: FC = (): JSX.Element => {
  const [data, setData] = useState<TPromocodes[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  // логика для фильтрации отображаемых строк в таблице с промокодами,
  // при создании страницы promocodes вынести в компонент страницы
  const [filterValue, setFilterValue] = useState<string>('all');

  // загрузка данных таблицы с сервера и запись в data стэйт
  // useEffect(() => {
  //   app.get('url')
  //   .then(res => setData(res.data))
  //   .catch(err => console.log(err))
  // }, [])

  const createPromocode = (value: string) => {
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

  const handleGeneratePromocode = (
    evt: FormEvent<HTMLFormElement>,
    value: string
  ) => {
    const getInput = document.getElementById('input') as HTMLInputElement;
    getInput.value = '';

    evt.preventDefault();

    // обновление тестовое
    setData(createPromocode(value)); // удалить при отправке на сервер

    // отправка на сервер
    // api.post('url',
    // {
    //   id: uuidv4(),
    //   date: now,
    //   promo: inputValue,
    //   price: '30р',
    //   status: true,
    //   menu: true,
    // })
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
  };

  const handleFilterChange = (value: string) => {
    setFilterValue(value);
  };

  const renderFilteredRows = () => {
    switch (filterValue) {
      case 'all':
        return data;
      case 'inactive':
        return data!.filter((row) => row.status === false);
      case 'active':
        return data!.filter((row) => row.status === true);
      default:
        return data;
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
        <form
          onSubmit={(evt) => handleGeneratePromocode(evt, inputValue)}
          className={stylesPromocodes.menue}
        >
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
            <ButtonBotTemplate buttonHtmlType="submit" color="blue">
              СГЕНЕРИРОВАТЬ ПРОМОКОД
            </ButtonBotTemplate>
          </div>
        </form>
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
