import { Endpoint } from '../../modules/api/interfaces/endpoint';
import { RequestMethod } from '../../modules/api/enums/request-method.enum';

export function apiClientTestDeleteEndpoint(query: ApiClientTestDeleteRequestQuery): Endpoint {
	return {
		url: 'api-client-test/:id',
		method: RequestMethod.DELETE,
		query
	}
}

export interface ApiClientTestDeleteRequestQuery {
	id: string;
}
