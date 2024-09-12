const { LocalException, EnumGuilty, BaseModel, BaseListModel, BaseModelWrapper, BaseListModelWrapper, ResultWithModelWrapper, NetworkException, BaseDataForNamed, debugPrint, ExceptionController, BaseModelWrapperRepository, BaseNamedVitruvius, BaseNamedMethodNamedVitruvius } = require("@antonpichka/vitruvius");

class FactoryObjectUtility {
    constructor() {
        if (new.target === FactoryObjectUtility) {
            throw new LocalException("FactoryObjectUtility",EnumGuilty.developer,"FactoryObjectUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }
    
    /* ModelWrapperRepository */
    static getIPAddressWrapperRepositoryFromNamedHttpClientService(namedHttpClientService) {
        return new IPAddressWrapperRepository(namedHttpClientService);
    }
}

class KeysUrlEndpointUtility {
    /* JsonipAPI */
    static #jsonipAPI = "https://jsonip.com";
    static #jsonipAPIQQProviders = this.#jsonipAPI + "/providers";

    constructor() {
        if (new.target === KeysUrlEndpointUtility) {
            throw new LocalException("KeysUrlEndpointUtility",EnumGuilty.developer,"KeysUrlEndpointUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }

    static get jsonipAPI() {
        return this.#jsonipAPI;
    }

    static get jsonipAPIQQProviders() {
        return this.#jsonipAPIQQProviders;
    }
}

class ReadyDataUtility {
    static #unknown = "unknown";
    static #success = "success";

    constructor() {
        if (new.target === ReadyDataUtility) {
            throw new LocalException("ReadyDataUtility",EnumGuilty.developer,"ReadyDataUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }

    static get unknown() {
        return this.#unknown;
    }

    static get success() {
        return this.#success;
    }
}

class KeysHttpClientServiceUtility {
    /* IPAddress */
    static #iPAddressQQIp = "ip";

    constructor() {
        if (new.target === KeysHttpClientServiceUtility) {
            throw new LocalException("KeysHttpClientServiceUtility",EnumGuilty.developer,"KeysHttpClientServiceUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }

    static get iPAddressQQIp() {
        return this.#iPAddressQQIp;
    }
}

class IPAddress extends BaseModel {
    #ip;

    constructor(ip) {
        super("" + ip + "");
        this.#ip = ip;
    }

    clone() {
        return new IPAddress(this.ip);
    }

    toString() {
        return "IPAddress(ip: " + this.ip + ")";
    }

    get ip() {
        return this.#ip;
    }
}

class ListIPAddress extends BaseListModel {
    constructor(listModel) {
        super(listModel);
    }

    clone() {
        const newListModel = new Array();
        for(const itemModel of this.listModel) {
            newListModel.push(itemModel.clone());
        }
        return new ListIPAddress(newListModel);
    }

    toString() {
        let strListModel = "\n";
        for(const itemModel of this.listModel) {
            strListModel += itemModel.toString() + ",\n";
        }
        return "ListIPAddress(listModel: [" + strListModel + "])";
    }
}

class IPAddressWrapper extends BaseModelWrapper {
    constructor(listObject) {
        super(listObject);
    }

    createModel() {
        return new IPAddress(this.listObject[0]);
    }
}

class ListIPAddressWrapper extends BaseListModelWrapper {
    constructor(listsListObject) {
        super(listsListObject);
    }

    createListModel() {
        const listModel = new Array();
        for(const itemListObject of this.listsListObject) {
            listModel.push(new IPAddress(itemListObject[0]));
        }
        return new ListIPAddress(listModel);
    }
}

class BaseNamedHttpClient {
    constructor() {
        if (new.target === BaseNamedHttpClient) {
            throw new LocalException("BaseNamedHttpClient",EnumGuilty.developer,"BaseNamedHttpClientQQConstructor","Cannot instantiate abstract class");
        }
    }
}

class DefaultHttpClient extends BaseNamedHttpClient {

}

class BaseNamedHttpClientService {
    constructor() {
        if (new.target === BaseNamedHttpClientService) {
            throw new LocalException("BaseNamedHttpClientService",EnumGuilty.developer,"BaseNamedHttpClientServiceQQConstructor","Cannot instantiate abstract class");
        }
    }

    get getParameterNamedHttpClient() {
        throw new LocalException("BaseNamedHttpClientService",EnumGuilty.developer,"BaseNamedHttpClientServiceQQGetParameterNamedHttpClient","Needs extends and must return type 'BaseNamedHttpClient'");
    }
}

class DefaultHttpClientService extends BaseNamedHttpClientService {
    static instance = new DefaultHttpClientService();
    #namedHttpClient;

    constructor() {
        super();
        if(DefaultHttpClientService.instance != null) {
            return DefaultHttpClientService.instance;
        }
    }

    get getParameterNamedHttpClient() {
        if(this.#namedHttpClient != null) {
            return this.#namedHttpClient;
        }
        this.#namedHttpClient = DefaultHttpClient();
        return this.#namedHttpClient;
    }
}

class IPAddressWrapperRepository extends BaseModelWrapperRepository {
    #namedHttpClientService;

    constructor(namedHttpClientService) {
        super();
        this.#namedHttpClientService = namedHttpClientService;
    }

    dispose() {
    }

    async getIPAddressParameterNamedHttpClientService() {
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
        } catch(exception) {
            if(exception instanceof NetworkException) {
                return ResultWithModelWrapper.exception(exception);
            }
            return ResultWithModelWrapper.exception(new LocalException("IPAddressWrapperRepository",EnumGuilty.device,ReadyDataUtility.unknown,exception.toString()));
        }
    }

    get _namedHttpClientService() {
        return this.#namedHttpClientService;
    }
}

class DataForGetIPAddressVitruvius extends BaseDataForNamed {
    constructor() {
        super();
    }

    toString() {
        return "DataForGetIPAddressVitruvius(exceptionController: " + this.exceptionController + ")";
    }
}

const EnumFirstRequestMethodGetIPAddressVitruvius = {
    exception : "exception",
    success : "success",
};

class FirstRequestMethodGetIPAddressVitruvius extends BaseNamedMethodNamedVitruvius {
    iPAddress;

    constructor(exceptionController, iPAddress) {
        super(exceptionController);
        this.iPAddress = iPAddress;
    }

    get getEnumNamedMethodNamedVitruvius() {
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumFirstRequestMethodGetIPAddressVitruvius.exception;
        }
        return EnumFirstRequestMethodGetIPAddressVitruvius.success;
    }

    toString() {
        return "FirstRequestMethodGetIPAddressVitruvius(exceptionController: " + this.exceptionController + ", " 
            + "iPAddress: " + this.iPAddress + ")";
    }
}

class GetIPAddressVitruvius extends BaseNamedVitruvius {
    // ModelWrapperRepository
    #iPAddressWrapperRepository = FactoryObjectUtility.getIPAddressWrapperRepositoryFromNamedHttpClientService(DefaultHttpClientService.instance);

    // NamedUtility

    constructor() {
        super(new DataForGetIPAddressVitruvius());
    }

    async firstRequest() {
        const getIPAddressParameterNamedHttpClientService = await this.#iPAddressWrapperRepository.getIPAddressParameterNamedHttpClientService();
        if(getIPAddressParameterNamedHttpClientService.exceptionController.isWhereNotEqualsNullParameterException()) {
            return this.#firstQQFirstRequestQQGetIPAddressParameterNamedHttpClientService(getIPAddressParameterNamedHttpClientService.exceptionController);
        }
        return new FirstRequestMethodGetIPAddressVitruvius(ExceptionController.success(), getIPAddressParameterNamedHttpClientService.modelWrapper.createModel());
    }

    dispose() {
        this.#iPAddressWrapperRepository.dispose();
    }

    async #firstQQFirstRequestQQGetIPAddressParameterNamedHttpClientService(exceptionController) {
        return new FirstRequestMethodGetIPAddressVitruvius(exceptionController, new IPAddress(""));
    }
}

async function main() {
    const getIPAddressVitruvius = new GetIPAddressVitruvius();
    const firstRequest = await getIPAddressVitruvius.firstRequest();
    debugPrint(firstRequest.toString());
    switch(firstRequest.getEnumNamedMethodNamedVitruvius) {
        case EnumFirstRequestMethodGetIPAddressVitruvius.exception:
            debugPrint("Build: Exception(" + firstRequest.exceptionController.getKeyParameterException + ")");
            break;
        case EnumFirstRequestMethodGetIPAddressVitruvius.success:
            debugPrint("Build: Success(" + firstRequest.iPAddress + ")");
            break;
        default:
            break;
    }
    getIPAddressVitruvius.dispose();
}
main();
// EXPECTED OUTPUT:
//
// ${toString()}
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
// ${toString()}
// Build: Exception(${getKeyParameterException})