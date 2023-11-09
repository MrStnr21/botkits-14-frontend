import { FC } from 'react';
import ConstructorAddButton from '../../../../ui/buttons/constructor-add-button/constructor-add-button';
import ConstructorDefaultButton from '../../../../ui/buttons/constructor-default-button/constructor-default-button';
import ControlLayout from '../../control-layout/control-layout';
import Input from '../../../../ui/inputs/input/input';
import stylesApiBlock from './api.module.scss';
import Typography from '../../../../ui/typography/typography';
import { TBlockProps, TApiBlock } from '../../../../services/types/builder';

const func = () => console.log(1);

const ApiBlockNode: FC<TBlockProps<TApiBlock>> = ({ data }) => {
  return (
    <ControlLayout type="API" name={data.name} nameSetter={func}>
      <div className={stylesApiBlock.container}>
        <div className={stylesApiBlock.overlay}>
          <Typography tag="span">URL стороннего сервиса</Typography>
          <div className={stylesApiBlock.input}>
            <Input
              placeholder="Введите URL"
              value={data.url}
              onChange={func}
              styled="bot-builder-default"
              disabled={false}
              errorMessage="Неправильный URL"
              name="control"
            />
          </div>
        </div>
        <div className={stylesApiBlock.overlay}>
          <Typography tag="span">Тип запроса</Typography>
          <div className={stylesApiBlock.box}>
            <div className={stylesApiBlock.button}>
              <ConstructorDefaultButton
                buttonHtmlType="button"
                onClick={func}
                disabled={false}
              >
                Get
              </ConstructorDefaultButton>
            </div>
            <div className={stylesApiBlock.button}>
              <ConstructorDefaultButton
                buttonHtmlType="button"
                onClick={func}
                disabled={false}
              >
                Post
              </ConstructorDefaultButton>
            </div>
          </div>
        </div>
        <div className={stylesApiBlock.overlay}>
          <Typography tag="span">Заголовок</Typography>
          <div className={stylesApiBlock.field}>
            <ConstructorAddButton
              buttonHtmlType="button"
              disabled={false}
              onClick={func}
            >
              Переменная
            </ConstructorAddButton>
          </div>
          <div className={stylesApiBlock.line} />
          <div className={stylesApiBlock.field}>
            <ConstructorAddButton
              buttonHtmlType="button"
              disabled={false}
              onClick={func}
            >
              Постоянная
            </ConstructorAddButton>
          </div>
        </div>
        <div className={stylesApiBlock.overlay}>
          <Typography tag="span">Параметр</Typography>
          <div className={stylesApiBlock.field}>
            <ConstructorAddButton
              buttonHtmlType="button"
              disabled={false}
              onClick={func}
            >
              Переменная
            </ConstructorAddButton>
          </div>
          <div className={stylesApiBlock.line} />
          <div className={stylesApiBlock.field}>
            <ConstructorAddButton
              buttonHtmlType="button"
              disabled={false}
              onClick={func}
            >
              Постоянная
            </ConstructorAddButton>
          </div>
        </div>
        <div className={stylesApiBlock.overlay}>
          <Typography tag="span">Сохранить результат</Typography>
          <div className={stylesApiBlock.field}>
            <ConstructorAddButton
              buttonHtmlType="button"
              disabled={false}
              onClick={func}
            >
              Переменная
            </ConstructorAddButton>
          </div>
        </div>
      </div>
    </ControlLayout>
  );
};

export default ApiBlockNode;
