import { FC, useState } from 'react';
import ConstructorAddButton from '../../../../ui/buttons/constructor-add-button/constructor-add-button';
import ConstructorDefaultButton from '../../../../ui/buttons/constructor-default-button/constructor-default-button';
import ControlLayout from '../../control-layout/control-layout';
import Input from '../../../../ui/inputs/input/input';
import styles from './api-block.module.scss';
import { TBlockProps, TApiBlock } from '../../../../services/types/builder';
import LabeledInput from '../../labeledInput/labeledInput';
import ValField from './val-field/val-filed';
import RequestSettings from './req-setting/req-setting';

const ApiBlockNode: FC<TBlockProps<TApiBlock>> = ({ data }) => {
  const [name, setName] = useState(data.name);

  const [headers, setHeaders] = useState<TApiBlock['headers']>(data.headers);
  const [params, setParams] = useState<TApiBlock['params']>(data.params);

  const [reqType, setReqType] = useState<'GET' | 'POST' | ''>('');

  const addHeader = (type: 'variable' | 'const') => {
    return () => setHeaders([...headers!, { type, name: '', variable: '' }]);
  };

  const addParam = (type: 'variable' | 'const') => {
    return () => setParams([...params!, { type, name: '', variable: '' }]);
  };

  const setHeaderConstructor = (index: number, param: 'name' | 'variable') => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setHeaders([
        ...headers!.slice(0, index),
        { ...headers![index], [param]: e.target.value },
        ...headers!.slice(index + 1),
      ]);
    };
  };

  const setParamConstructor = (index: number, param: 'name' | 'variable') => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setParams([
        ...params!.slice(0, index),
        { ...params![index], [param]: e.target.value },
        ...params!.slice(index + 1),
      ]);
    };
  };

  const getHeaderFields = (type: 'variable' | 'const') => {
    return headers!.map((item, index) => {
      return (
        item.type === type && (
          <ValField
            name={item.name || ''}
            value={item.variable || ''}
            onChangeVal={setHeaderConstructor(index, 'variable')}
            onChangeName={setHeaderConstructor(index, 'name')}
          />
        )
      );
    });
  };

  const getParamFields = (type: 'variable' | 'const') => {
    return params!.map((item, index) => {
      return (
        item.type === type && (
          <ValField
            name={item.name || ''}
            value={item.variable || ''}
            onChangeVal={setParamConstructor(index, 'variable')}
            onChangeName={setParamConstructor(index, 'name')}
          />
        )
      );
    });
  };

  return (
    <ControlLayout
      type="API"
      name={name}
      nameSetter={(newName: string) => {
        setName(newName);
      }}
    >
      <div className={styles.container}>
        <LabeledInput title="URL стороннего сервиса">
          <Input
            placeholder="Введите URL"
            value={data.url}
            onChange={() => {}}
            styled="bot-builder-default"
            disabled={false}
            errorMessage="Неправильный URL"
            name="control"
          />
        </LabeledInput>
        <LabeledInput title="Тип запроса">
          <div className={styles.box}>
            <ConstructorDefaultButton
              buttonHtmlType="button"
              onClick={() => setReqType('GET')}
              disabled={false}
              isActive={reqType === 'GET'}
            >
              Get
            </ConstructorDefaultButton>
            <ConstructorDefaultButton
              buttonHtmlType="button"
              onClick={() => setReqType('POST')}
              disabled={false}
              isActive={reqType === 'POST'}
            >
              Post
            </ConstructorDefaultButton>
          </div>
        </LabeledInput>
        <RequestSettings
          variableFields={getHeaderFields('variable')}
          constFields={getHeaderFields('const')}
          addFieldVariable={addHeader('variable')}
          addFieldConst={addHeader('const')}
        />
        <RequestSettings
          variableFields={getParamFields('variable')}
          constFields={getParamFields('const')}
          addFieldVariable={addParam('variable')}
          addFieldConst={addParam('const')}
        />
        <LabeledInput title="Сохранить результат">
          <ConstructorAddButton
            buttonHtmlType="button"
            disabled={false}
            onClick={() => {}}
          >
            Переменная
          </ConstructorAddButton>
        </LabeledInput>
      </div>
    </ControlLayout>
  );
};

export default ApiBlockNode;
