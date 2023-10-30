import ConstructorAddButton from '../../../../ui/buttons/constructor-add-button/constructor-add-button';
import ConstructorDefaultButton from '../../../../ui/buttons/constructor-default-button/constructor-default-button';
import ControlLayout from '../../control-layout/control-layout';
import Input from '../../../../ui/inputs/input/input';
import stylesApiBlock from './api.module.scss';

const func = () => console.log(1);

function ApiBlockNode() {
  return (
    <ControlLayout type="API" name="Название API" nameSetter={func}>
      <div className={stylesApiBlock.container}>
        <div className={stylesApiBlock.overlay}>
          <h4 className={stylesApiBlock.h4}>URL стороннего сервиса</h4>
          <div className={stylesApiBlock.input}>
            <Input
              placeholder="Введите URL"
              onChange={func}
              styled="bot-builder-default"
              disabled={false}
              errorMessage="Неправильный URL"
              name="control"
            />
          </div>
        </div>
        <div className={stylesApiBlock.overlay}>
          <h4 className={stylesApiBlock.h4}>Тип запроса</h4>
          <div className={stylesApiBlock.box1}>
            <div className={stylesApiBlock.button}>
              <ConstructorDefaultButton
                buttonHtmlType="button"
                // children="Get"
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
          <h4 className={stylesApiBlock.h4}>Заголовок</h4>
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
          <h4 className={stylesApiBlock.h4}>Параметр</h4>
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
          <h4 className={stylesApiBlock.h4}>Сохранить результат</h4>
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
}

export default ApiBlockNode;
