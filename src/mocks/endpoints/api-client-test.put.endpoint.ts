import { Endpoint } from '../../modules/api/interfaces/endpoint';
import { RequestMethod } from '../../modules/api/enums/request-method.enum';

export function apiClientTestPutEndpoint(query: ApiClientTestPutRequestQuery, body: ApiClientTestPutRequestBody): Endpoint {
	return {
		url: 'api-client-test/:id',
		method: RequestMethod.PUT,
		query,
		body
	}
}

export interface ApiClientTestPutRequestQuery {
	id: string;
}

export interface ApiClientTestPutRequestBody {
	value: number;
}
