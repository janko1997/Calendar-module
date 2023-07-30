import { instanceApi } from '../../Services/apiService';

export const getEvents = (): Promise<any> =>
  instanceApi.post(
    '/workflows/7c84997dd6894507a60796acb06e5c43/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=6hFoizfo2w62d0iQK_Zyt7a3Ycr9akAkXdCPAG0ecwQ&usr=4a616e636f4a'
  );
