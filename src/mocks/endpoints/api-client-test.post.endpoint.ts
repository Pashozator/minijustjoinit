import { Endpoint } from '../../modules/api/interfaces/endpoint';
import { RequestMethod } from '../../modules/api/enums/request-method.enum';

export function apiClientTestPostEndpoint(body: ApiClientTestPostRequestBody): Endpoint {
	return {
		url: 'api-client-test',
		method: RequestMethod.POST,
		body
	}
}

export interface ApiClientTestPostRequestBody {
	value: number;
}
