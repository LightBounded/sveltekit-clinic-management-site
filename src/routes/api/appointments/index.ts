import type { RequestHandler } from '@sveltejs/kit';
import { connect } from 'src/db/connect';
import Appointment from 'src/models/appointment';

export const get: RequestHandler = async () => {
	try {
		await connect();
		return {
			body: await Appointment.find()
		};
	} catch (error) {
		return {
			status: 400,
			body: error
		};
	}
};

export const post: RequestHandler = async ({ request }) => {
	try {
		await connect();
		return {
			body: await Appointment.create(await request.json())
		};
	} catch (error) {
		return {
			status: 400,
			body: error
		};
	}
};
