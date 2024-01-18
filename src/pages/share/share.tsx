/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  shareTableModalButtons,
  shareRows,
  shareCols,
  cellStyle,
  rowStyleRef,
} from './shareConfig';
import stylesShare from './share.module.scss';
import EnhancedTable from '../../components/enhanced-table/enhanced-table';
import { ppHeadCell } from '../../components/table-cells/table-cells';
import Button from '../../ui/buttons/button/button';
import Typography from '../../ui/typography/typography';
import useModal from '../../services/hooks/use-modal';
import ModalPopup from '../../components/popups/modal-popup/modal-popup';
import ShareBotPopup from '../../components/popups/share-bot-popup/share-bot';
import { getReq } from '../../api/api';

type TableData = {
  [key: string]: any;
};

const Share: FC = () => {
  const { isModalOpen, closeModal, openModal } = useModal();
  const [tableData, setTableData] = useState<TableData[]>(shareRows);
  // временно
  const [serverData, setServerData] = useState<any>([]);
  console.log(serverData);
  // ручка заработает, подключимся
  useEffect(() => {
    getReq({ uri: 'tariffs' })
      .then((responseData) => {
        setServerData(responseData);
      })
      .catch((error) => {
        console.log('Ошибка получения данных:', error);
      });
  }, []);

  const onCellUpdate = (rowId: number, colName: string, updatedValue?: any) => {
    const updatedData = [...tableData];
    if (updatedData[rowId]) {
      updatedData[rowId] = { ...updatedData[rowId], [colName]: updatedValue };
      setTableData(updatedData);
    }
  };
  const onRowsUpdate = (updatedData: any) => {
    setTableData(updatedData);
  };
  const removeEmail = (inputValue: string) => {
    const atIndex = inputValue.indexOf('@');
    if (atIndex !== -1) {
      return inputValue.substring(0, atIndex);
    }
    return inputValue;
  };
  const addTableData = (inputValue: string) => {
    if (inputValue) {
      const newRow = {
        id: uuidv4(),
        mail: inputValue,
        name: removeEmail(inputValue),
      };
      setTableData((prevData) => [newRow, ...prevData]);
      closeModal();
    }
  };

  return (
    <div className={stylesShare.share}>
      <div className={stylesShare.share__header}>
        <div>
          <Typography
            tag="h2"
            fontFamily="secondary"
            className={stylesShare.share__title}
          >
            Общий доступ
          </Typography>
        </div>
        <div className={stylesShare.share__buttonWrapper}>
          <Button
            variant="default"
            size="small"
            color="green"
            buttonHtmlType="submit"
            onClick={openModal}
          >
            Добавить
          </Button>
        </div>
      </div>
      <EnhancedTable
        // при переполнении таблицы колонками задаём минимальную ширину таблицы больше минимальной
        // ширины box и получаем горизонтальный скролл внутри box
        // minTableWidth="1360px"
        pagination
        check
        toolbar
        dropdown
        columns={shareCols}
        headComponent={ppHeadCell}
        tableData={tableData}
        rowStyle={rowStyleRef}
        cellStyle={cellStyle}
        shadow={1}
        menuOptions={shareTableModalButtons}
        onCellUpdate={onCellUpdate}
        onRowsUpdate={onRowsUpdate}
      />
      {isModalOpen && (
        <ModalPopup onClick={closeModal}>
          <ShareBotPopup
            onCancelClick={closeModal}
            onSubmitClick={addTableData}
          />
        </ModalPopup>
      )}
    </div>
  );
};

export default Share;
