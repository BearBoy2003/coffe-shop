const API_BASE_URL = (process.env.VUE_APP_API_BASE_URL || 'http://localhost:3000').replace(/\/$/, '')

const getApiUrl = (path) => {
	const normalizedPath = path.startsWith('/') ? path : `/${path}`
	return `${API_BASE_URL}${normalizedPath}`
}

export { getApiUrl }
