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
import { getSharedAccesses, postSharedAccess } from '../../api/shared';

type TableData = {
  [key: string]: any;
};

const Share: FC = () => {
  const { isModalOpen, closeModal, openModal } = useModal();
  const [tableData, setTableData] = useState<TableData[]>(shareRows);
  const [loading, setLoading] = useState(false);
  const [sharedAccesses, setSharedAccesses] = useState<any>([]);

  useEffect(() => {
    setLoading(true);
    getSharedAccesses()
      .then((responseData) => {
        console.log(responseData);
        setSharedAccesses(
          // eslint-disable-next-line no-underscore-dangle
          responseData.map((item) => ({ ...item, id: item._id }))
        );
      })
      .catch((error) => {
        console.log('Ошибка получения данных:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
        email: inputValue,
      };
      postSharedAccess(newRow)
        .then((response) => {
          console.log('Доступ успешно добавлен', response);
        })
        .catch((error) => {
          console.error('Ошибка при добавлении доступа:', error);
        });

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
        pagination
        check
        toolbar
        dropdown
        columns={shareCols}
        headComponent={ppHeadCell}
        tableData={sharedAccesses}
        rowStyle={rowStyleRef}
        cellStyle={cellStyle}
        shadow={1}
        menuOptions={shareTableModalButtons}
        setTableData={setTableData}
        loading={loading}
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
