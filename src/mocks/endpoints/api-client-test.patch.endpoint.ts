import { Endpoint } from '../../modules/api/interfaces/endpoint';
import { RequestMethod } from '../../modules/api/enums/request-method.enum';

export function apiClientTestPatchEndpoint(query: ApiClientTestPatchRequestQuery, body: ApiClientTestPatchRequestBody): Endpoint {
	return {
		url: 'api-client-test/:id',
		method: RequestMethod.PATCH,
		query,
		body
	}
}

export interface ApiClientTestPatchRequestQuery {
	id: string;
}

export interface ApiClientTestPatchRequestBody {
	value: number;
}
