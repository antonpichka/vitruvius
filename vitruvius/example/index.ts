import { LocalException, EnumGuilty, BaseModel, BaseListModel, BaseModelWrapper, BaseListModelWrapper, ResultWithModelWrapper, NetworkException, BaseDataForNamedVitruvius, debugPrint, ExceptionController, BaseModelWrapperRepository, BaseNamedVitruvius, BaseNamedMethodNamedVitruvius, BaseNamedCaseNamedMethodNamedVitruvius, BaseDataForNamedCaseNamedMethodNamedVitruvius } from "@antonpichka/vitruvius";

class FactoryModelWrapperRepositoryUtility {
    private constructor() {
    }
    
    public static getIPAddressWrapperRepositoryFromNamedHttpClientService(namedHttpClientService: BaseNamedHttpClientService) {
        return new IPAddressWrapperRepository(namedHttpClientService);
    }
}

class KeysUrlEndpointUtility {
    /* JsonipAPI */
    public static readonly jsonipAPI: string = "https://jsonip.com";
    public static readonly jsonipAPIQQProviders: string = this.jsonipAPI + "/providers";

    private constructor() {
    }
}

class ReadyDataUtility {
    public static readonly unknown: string = "unknown";
    public static readonly success: string = "success";

    private constructor() {
    }
}

class KeysHttpClientServiceUtility {
    /* IPAddress */
    public static readonly iPAddressQQIp: string = "ip";

    private constructor() {
    }
}

class IPAddress extends BaseModel {
    public readonly ip: string;

    public constructor(ip: string) {
        super(ip);
        this.ip = ip;
    }

    public override clone(): IPAddress {
        return new IPAddress(this.ip);
    }

    public override toString(): string {
        return "IPAddress(ip: " + this.ip + ")";
    }
}

class ListIPAddress<T extends IPAddress> extends BaseListModel<T> {
    public constructor(listModel: Array<T>) {
        super(listModel);
    }

    public override clone(): ListIPAddress<T> {
        const newListModel = new Array<T>();
        for(const itemModel of this.listModel) {
            newListModel.push(itemModel.clone() as T);
        }
        return new ListIPAddress(newListModel);
    }

    public override toString(): string {
        let strListModel = "\n";
        for(const itemModel of this.listModel) {
            strListModel += itemModel.toString() + ",\n";
        }
        return "ListIPAddress(listModel: [" + strListModel + "])";
    }
}

class IPAddressWrapper extends BaseModelWrapper {
    public constructor(listObject: Array<any>) {
        super(listObject);
    }

    public override createModel(): IPAddress {
        return new IPAddress(this.listObject[0]);
    }
}

class ListIPAddressWrapper extends BaseListModelWrapper {
    public constructor(listsListObject: Array<Array<any>>) {
        super(listsListObject);
    }

    public override createListModel(): ListIPAddress<IPAddress> {
        const listModel = new Array<IPAddress>();
        for(const itemListObject of this.listsListObject) {
            listModel.push(new IPAddress(itemListObject[0] as string));
        }
        return new ListIPAddress(listModel);
    }
}

abstract class BaseNamedHttpClient {
    protected constructor() {
    }
}

class DefaultHttpClient extends BaseNamedHttpClient {
    public constructor() {
        super();
    }

}

abstract class BaseNamedHttpClientService {
    protected constructor() {
    }

    public abstract get getParameterNamedHttpClient(): BaseNamedHttpClient;
}

class DefaultHttpClientService extends BaseNamedHttpClientService {
    public static readonly instance = new DefaultHttpClientService();
    private namedHttpClient: BaseNamedHttpClient | null = null;

    private constructor() {
        super();
    }

    public override get getParameterNamedHttpClient(): BaseNamedHttpClient {
        if(this.namedHttpClient != null) {
            return this.namedHttpClient;
        }
        this.namedHttpClient = new DefaultHttpClient();
        return this.namedHttpClient;
    }
}

class IPAddressWrapperRepository extends BaseModelWrapperRepository {
    protected readonly namedHttpClientService: BaseNamedHttpClientService;

    public constructor(namedHttpClientService: BaseNamedHttpClientService) {
        super();
        this.namedHttpClientService = namedHttpClientService;
    }

    public override dispose(): void {
    }

    public async getIPAddressParameterNamedHttpClientService(): Promise<ResultWithModelWrapper> {
        try {
            const response = await fetch(KeysUrlEndpointUtility.jsonipAPI, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(response.status != 200) {
                throw NetworkException.fromKeyAndStatusCode("IPAddressWrapperRepository",response.status.toString(),response.status);
            }
            const json = await response.json();
            const data = new Map(Object.entries(json));
            const ipByIPAddress = this.getSafeValueFromMapAndKeyAndDefaultValue(data,KeysHttpClientServiceUtility.iPAddressQQIp,"");
            return ResultWithModelWrapper.success(new IPAddressWrapper([ipByIPAddress]));
        } catch(exception: any) {
            if(exception instanceof NetworkException) {
                return ResultWithModelWrapper.exception(exception);
            }
            return ResultWithModelWrapper.exception(new LocalException("IPAddressWrapperRepository",EnumGuilty.device,ReadyDataUtility.unknown,exception.toString()));
        }
    }
}

enum EnumFirstRequestMethodGetIPAddressVitruvius {
    exception = "exception",
    success = "success",
}

class FirstRequestMethodGetIPAddressVitruvius extends BaseNamedMethodNamedVitruvius<EnumFirstRequestMethodGetIPAddressVitruvius> {
    public readonly iPAddress: IPAddress;

    public constructor(exceptionController: ExceptionController, iPAddress: IPAddress) {
        super(exceptionController);
        this.iPAddress = iPAddress;
    }

    public override get getEnumNamedMethodNamedVitruvius(): EnumFirstRequestMethodGetIPAddressVitruvius {
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumFirstRequestMethodGetIPAddressVitruvius.exception;
        }
        return EnumFirstRequestMethodGetIPAddressVitruvius.success;
    }

    public override toString(): string {
        return "FirstRequestMethodGetIPAddressVitruvius(exceptionController: " + this.exceptionController + ", " 
            + "iPAddress: " + this.iPAddress + ")";
    }
}

class DataForExceptionCaseFirstRequestMethodGetIPAddressVitruvius extends BaseDataForNamedCaseNamedMethodNamedVitruvius {
    public readonly exceptionController: ExceptionController;

    public constructor(exceptionController: ExceptionController) {
        super();
        this.exceptionController = exceptionController;
    }

    public override toString(): string {
        return "DataForExceptionCaseFirstRequestMethodGetIPAddressVitruvius(exceptionController: " + this.exceptionController + ")";
    }
}

class ExceptionCaseFirstRequestMethodGetIPAddressVitruvius extends BaseNamedCaseNamedMethodNamedVitruvius<DataForExceptionCaseFirstRequestMethodGetIPAddressVitruvius> {
    // NamedUtility

    public constructor(exceptionController: ExceptionController) {
        super(new DataForExceptionCaseFirstRequestMethodGetIPAddressVitruvius(exceptionController));
    }

    public override initBuild(): BaseNamedCaseNamedMethodNamedVitruvius<DataForExceptionCaseFirstRequestMethodGetIPAddressVitruvius> {
        debugPrint("Build: Exception(" + this.dataForNamedCaseNamedMethodNamedVitruvius
            .exceptionController
            .getKeyParameterException + ")");
        return this;    
    }

    public override disposeBuild(): BaseNamedCaseNamedMethodNamedVitruvius<DataForExceptionCaseFirstRequestMethodGetIPAddressVitruvius> {
        return this;
    }
}

class DataForSuccessCaseFirstRequestMethodGetIPAddressVitruvius extends BaseDataForNamedCaseNamedMethodNamedVitruvius {
    public readonly iPAddress: IPAddress;

    public constructor(iPAddress: IPAddress) {
        super();
        this.iPAddress = iPAddress;
    }

    public override toString(): string {
        return "DataForSuccessCaseFirstRequestMethodGetIPAddressVitruvius(iPAddress: " + this.iPAddress + ")";
    }
}

class SuccessCaseFirstRequestMethodGetIPAddressVitruvius extends BaseNamedCaseNamedMethodNamedVitruvius<DataForSuccessCaseFirstRequestMethodGetIPAddressVitruvius> {
    // NamedUtility

    public constructor(iPAddress: IPAddress) {
        super(new DataForSuccessCaseFirstRequestMethodGetIPAddressVitruvius(iPAddress));
    }

    public override initBuild(): BaseNamedCaseNamedMethodNamedVitruvius<DataForSuccessCaseFirstRequestMethodGetIPAddressVitruvius> {
        debugPrint("Build: Success(" + this.dataForNamedCaseNamedMethodNamedVitruvius.iPAddress + ")");
        return this;    
    }

    public override disposeBuild(): BaseNamedCaseNamedMethodNamedVitruvius<DataForSuccessCaseFirstRequestMethodGetIPAddressVitruvius> {
        return this;
    }
}

class DataForGetIPAddressVitruvius extends BaseDataForNamedVitruvius {
    public constructor() {
        super();
    }

    public override toString() {
        return "DataForGetIPAddressVitruvius(exceptionController: " + this.exceptionController + ")";
    }
}

class GetIPAddressVitruvius extends BaseNamedVitruvius<DataForGetIPAddressVitruvius> {
    // ModelWrapperRepository
    private readonly iPAddressWrapperRepository = FactoryModelWrapperRepositoryUtility.getIPAddressWrapperRepositoryFromNamedHttpClientService(DefaultHttpClientService.instance);

    // NamedUtility

    public constructor() {
        super(new DataForGetIPAddressVitruvius());
    }

    public override dispose(): void {
        this.iPAddressWrapperRepository.dispose();
    }

    public async firstRequest(): Promise<FirstRequestMethodGetIPAddressVitruvius> {
        const getIPAddressParameterNamedHttpClientService = await this.iPAddressWrapperRepository.getIPAddressParameterNamedHttpClientService();
        if(getIPAddressParameterNamedHttpClientService.exceptionController.isWhereNotEqualsNullParameterException()) {
            return this.firstQQFirstRequestQQGetIPAddressParameterNamedHttpClientService(getIPAddressParameterNamedHttpClientService.exceptionController);
        }
        return new FirstRequestMethodGetIPAddressVitruvius(
            ExceptionController.success(), 
            getIPAddressParameterNamedHttpClientService.modelWrapper!.createModel() as IPAddress);
    }

    private async firstQQFirstRequestQQGetIPAddressParameterNamedHttpClientService(exceptionController: ExceptionController): Promise<FirstRequestMethodGetIPAddressVitruvius> {
        return new FirstRequestMethodGetIPAddressVitruvius(exceptionController, new IPAddress(""));
    }
}

async function main(): Promise<void> {
    const getIPAddressVitruvius = new GetIPAddressVitruvius();
    const firstRequest = await getIPAddressVitruvius.firstRequest();
    switch(firstRequest.getEnumNamedMethodNamedVitruvius) {
        case EnumFirstRequestMethodGetIPAddressVitruvius.exception:
            new ExceptionCaseFirstRequestMethodGetIPAddressVitruvius(firstRequest.exceptionController)
                .initBuild()
                .disposeBuild();
            break;
        case EnumFirstRequestMethodGetIPAddressVitruvius.success:
            new SuccessCaseFirstRequestMethodGetIPAddressVitruvius(firstRequest.iPAddress)
                .initBuild()
                .disposeBuild();
            break;
        default:
            break;
    }
    getIPAddressVitruvius.dispose();
}
main();
// EXPECTED OUTPUT:
//
// Build: Success(IPAddress(ip: ${your_ip}))

/// OR

// EXPECTED OUTPUT:
//
// ===start_to_trace_exception===
//
// WhereHappenedException(Class) --> ${WhereHappenedException(Class)}
// NameException(Class) --> ${NameException(Class)}
// toString() --> ${toString()}
//
// ===end_to_trace_exception===
//
// Build: Exception(${getKeyParameterException})