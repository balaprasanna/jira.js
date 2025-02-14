import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
import { RequestConfig } from '../requestConfig';

export class IssueCustomFieldValuesApps {
  constructor(private client: Client) {}

  /**
   * Updates the value of a custom field on one or more issues. Custom fields can only be updated by the Forge app that
   * created them.
   *
   * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** Only
   * the app that created the custom field can update its values with this operation.
   */
  async updateCustomFieldValue<T = void>(
    parameters: Parameters.UpdateCustomFieldValue,
    callback: Callback<T>
  ): Promise<void>;
  /**
   * Updates the value of a custom field on one or more issues. Custom fields can only be updated by the Forge app that
   * created them.
   *
   * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** Only
   * the app that created the custom field can update its values with this operation.
   */
  async updateCustomFieldValue<T = void>(parameters: Parameters.UpdateCustomFieldValue, callback?: never): Promise<T>;
  async updateCustomFieldValue<T = void>(
    parameters: Parameters.UpdateCustomFieldValue,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/rest/api/2/app/field/${parameters.fieldIdOrKey}/value`,
      method: 'PUT',
      params: {
        generateChangelog: parameters.generateChangelog,
      },
      data: {
        updates: parameters.updates,
      },
    };

    return this.client.sendRequest(config, callback, {
      methodName: 'version2.issueCustomFieldValuesApps.updateCustomFieldValue',
    });
  }
}
