export declare abstract class BaseNamedMethodNamedVitruvius<T> {
    readonly exceptionController: ExceptionController;
    protected constructor(exceptionController: ExceptionController);
    abstract get getEnumNamedMethodNamedVitruvius(): T;
    abstract toString(): string;
}
export declare abstract class BaseDataForNamedCaseNamedMethodNamedVitruvius {
    protected constructor();
    abstract toString(): string;
}
export declare abstract class BaseNamedCaseNamedMethodNamedVitruvius<T extends BaseDataForNamedCaseNamedMethodNamedVitruvius> {
    protected readonly dataForNamedCaseNamedMethodNamedVitruvius: T;
    protected constructor(dataForNamedCaseNamedMethodNamedVitruvius: T);
    abstract initBuild(): BaseNamedCaseNamedMethodNamedVitruvius<T>;
    abstract disposeBuild(): BaseNamedCaseNamedMethodNamedVitruvius<T>;
}
export declare abstract class BaseDataForNamedVitruvius {
    exceptionController: ExceptionController;
    protected constructor();
    abstract toString(): string;
}
export declare abstract class BaseNamedVitruvius<T extends BaseDataForNamedVitruvius> implements IDispose {
    protected readonly dataForNamedVitruvius: T;
    protected constructor(dataForNamedVitruvius: T);
    abstract dispose(): void;
}
export declare abstract class BaseException {
    readonly key: string;
    private readonly thisClass;
    private readonly exceptionClass;
    protected constructor(thisClass: string, exceptionClass: string, key: string);
    abstract toString(): string;
    protected debugPrintExceptionParametersThisClassAndExceptionClass(): void;
}
export declare enum EnumGuilty {
    developer = 0,
    device = 1,
    user = 2
}
export declare class LocalException extends BaseException {
    readonly enumGuilty: EnumGuilty;
    readonly message: string;
    constructor(thisClass: string, enumGuilty: EnumGuilty, key: string, message?: string);
    toString(): string;
}
export declare class NetworkException extends BaseException {
    readonly statusCode: number;
    readonly nameStatusCode: string;
    readonly descriptionStatusCode: string;
    constructor(thisClass: string, key: string, statusCode: number, nameStatusCode?: string, descriptionStatusCode?: string);
    static fromKeyAndStatusCode(thisClass: string, key: string, statusCode: number): NetworkException;
    toString(): string;
}
export declare class CurrentModelWIndex<T extends BaseModel> {
    readonly currentModel: T;
    readonly index: number;
    constructor(currentModel: T, index: number);
}
export declare abstract class BaseModelTTNamedTTNamedTTNamedTTIterator<T extends BaseModel> {
    protected readonly listModelIterator: Array<T>;
    protected constructor();
    protected abstract get currentModelWIndex(): CurrentModelWIndex<T>;
    getSortedListModelFromListModelParameterListModelIterator(listModel: Array<T>): T[];
}
export declare abstract class BaseListModel<T extends BaseModel> {
    readonly listModel: Array<T>;
    protected constructor(listModel: Array<T>);
    abstract clone(): BaseListModel<T>;
    abstract toString(): string;
    sortingFromModelTTNamedTTNamedTTNamedTTIteratorParameterListModel(modelTTNamedTTNamedTTNamedTTIterator: BaseModelTTNamedTTNamedTTNamedTTIterator<T>): void;
    insertFromNewModelParameterListModel(newModel: T): void;
    updateFromNewModelParameterListModel(newModel: T): void;
    deleteFromUniqueIdByModelParameterListModel(uniqueIdByModel: string): void;
    insertListFromNewListModelParameterListModel(newListModel: Array<T>): void;
    updateListFromNewListModelParameterListModel(newListModel: Array<T>): void;
    deleteListFromListUniqueIdByModelParameterListModel(listUniqueIdByModel: Array<string>): void;
}
export declare abstract class BaseModel {
    readonly uniqueId: string;
    protected constructor(uniqueId: string);
    abstract clone(): BaseModel;
    abstract toString(): string;
}
export declare abstract class BaseModelWrapper {
    protected readonly listObject: Array<any>;
    protected constructor(listObject: Array<any>);
    abstract createModel(): BaseModel;
}
export declare abstract class BaseListModelWrapper {
    protected readonly listsListObject: Array<Array<any>>;
    protected constructor(listsListObject: Array<Array<any>>);
    abstract createListModel(): BaseListModel<BaseModel>;
}
export declare abstract class BaseModelWrapperRepository implements IDispose {
    protected constructor();
    abstract dispose(): void;
    protected getSafeValueFromMapAndKeyAndDefaultValue(map: Map<string, any>, key: string, defaultValue: any): any;
}
export declare class ExceptionController {
    private readonly exception;
    private constructor();
    static success(): ExceptionController;
    static exception(exception: BaseException): ExceptionController;
    get getKeyParameterException(): string;
    isWhereNotEqualsNullParameterException(): boolean;
    toString(): string;
}
export interface IDispose {
    dispose(): void;
}
export declare class Result<T extends any> {
    readonly parameter: T | null;
    readonly exceptionController: ExceptionController;
    private constructor();
    static success(parameter: any): Result<any>;
    static exception(exception: BaseException): Result<any>;
}
export declare class ResultWithModelWrapper<T extends BaseModelWrapper> {
    readonly modelWrapper: T | null;
    readonly exceptionController: ExceptionController;
    private constructor();
    static success(modelWrapper: BaseModelWrapper): ResultWithModelWrapper<BaseModelWrapper>;
    static exception(exception: BaseException): ResultWithModelWrapper<BaseModelWrapper>;
}
export declare class ResultWithListModelsWrapper<T extends BaseListModelWrapper> {
    readonly listModelWrapper: T | null;
    readonly exceptionController: ExceptionController;
    private constructor();
    static success(listModelWrapper: BaseListModelWrapper): ResultWithListModelsWrapper<BaseListModelWrapper>;
    static exception(exception: BaseException): ResultWithListModelsWrapper<BaseListModelWrapper>;
}
export declare function debugPrint(text: string): void;
export declare function debugPrintException(text: string): void;
//# sourceMappingURL=index.d.ts.map