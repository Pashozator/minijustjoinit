import { Endpoint } from '../../modules/api/interfaces/endpoint';
import { RequestMethod } from '../../modules/api/enums/request-method.enum';

export function apiClientTestGetEndpoint(): Endpoint {
	return {
		url: 'api-client-test',
		method: RequestMethod.GET
	}
}
