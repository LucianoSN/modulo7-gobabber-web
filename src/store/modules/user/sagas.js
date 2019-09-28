import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

function* updateProfile({ payload }) {
	try {
		const { name, email, ...rest } = payload.data;

		const profile = {
			name,
			email,
			...(rest.oldPassword ? rest : {}),
		};

		console.tron.log('PROFILE', profile);

		const response = yield call(api.put, 'users', profile);

		toast.success('Perfil atualizado com sucesso');
		yield put(updateProfileSuccess(response.data));
	} catch (e) {
		console.tron.log('ERRROR', e);
		toast.error('Erro ao atualizar perfil, confira seus dados!');
		yield put(updateProfileFailure());
	}
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
