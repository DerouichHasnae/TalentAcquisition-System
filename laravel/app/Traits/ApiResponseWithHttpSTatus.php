<?php

namespace App\Traits;

trait ApiResponseWithHttpSTatus
{
    /**
     * Retourne une réponse JSON de succès.
     *
     * @param string $message
     * @param mixed $data
     * @param int $statusCode
     * @return \Illuminate\Http\JsonResponse
     */
    public function successResponse($message, $data = [], $statusCode = 200)
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data,
        ], $statusCode);
    }

    /**
     * Retourne une réponse JSON d'erreur.
     *
     * @param string $message
     * @param int $statusCode
     * @return \Illuminate\Http\JsonResponse
     */
    public function errorResponse($message, $statusCode = 400)
    {
        return response()->json([
            'success' => false,
            'message' => $message,
        ], $statusCode);
    }

    /**
     * Retourne une réponse JSON de validation.
     *
     * @param mixed $errors
     * @param int $statusCode
     * @return \Illuminate\Http\JsonResponse
     */
    public function validationResponse($errors, $statusCode = 422)
    {
        return response()->json([
            'success' => false,
            'message' => 'Validation errors',
            'errors' => $errors,
        ], $statusCode);
    }
}
