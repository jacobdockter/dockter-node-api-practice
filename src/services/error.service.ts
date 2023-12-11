export function formatError(error: unknown) {
    let message = 'Error: Unknown'
    if (error instanceof Error) message = error.message
    return message
}