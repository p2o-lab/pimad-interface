/**
 * This is the interface to parse PEAModel coming from PiMAd
 * At specially needed, if we are using PiMAd as web service
 */
import {DataItemAccessLevel} from './enum';

export interface PEAModel {
  dataAssemblies: DataAssemblyModel[];
  dataModel: string;
  feas: any[];
  name: string;
  endpoints: Endpoint[];
  pimadIdentifier: string;
  services: ServiceModel[];
}
export interface DataAssemblyModel {
  dataItems: DataItemModel[];
  dataSourceIdentifier: string;
  description: string;
  name: string;
  metaModelRef: string;
  pimadIdentifier: string;
}
export interface DataItemModel {
  dataType: string;
  name: string;
  value: string;
  defaultValue: string;
  description: string;
  pimadIdentifier: string;
  cIData?: CIData;
  dataSourceIdentifier: string;
  metaModelRef: string;
}

export interface NodeId {
  namespaceIndex: string;
  identifier: string;
  access: DataItemAccessLevel;
}

export interface CIData {
  nodeId: NodeId;
}

export interface Endpoint {
  dataType: string;
  name: string;
  value: string;
  defaultValue: string;
  description: string;
  pimadIdentifier: string;
}

export interface Attribute {
  dataType: string;
  name: string;
  value: string;
}

export interface ProcedureModel {
  attributes: Attribute[];
  dataAssembly: DataAssemblyModel;
  metaModelRef: string;
  name: string;
  parameters: DataAssemblyModel[];
  dataSourceIdentifier: string;
  pimadIdentifier: string;
  reportValues: DataAssemblyModel[];
  processValuesIn: DataAssemblyModel[];
  processValuesOut: DataAssemblyModel[];
}

export interface ServiceModel {
  attributes: any[];
  dataAssembly: DataAssemblyModel;
  metaModelRef: string;
  name: string;
  parameters: any[];
  procedures: ProcedureModel[];
  dataSourceIdentifier: string;
  pimadIdentifier: string;
}
