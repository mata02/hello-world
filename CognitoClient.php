<?php

namespace App\Services\Cognito;

use Aws\CognitoIdentityProvider\CognitoIdentityProviderClient;
use Aws\CognitoIdentityProvider\Exception\CognitoIdentityProviderException;
use Exception;

class CognitoClient
{
    /**
     * @var CognitoIdentityProviderClient
     */
    protected $client;

    /**
     * @var string
     */
    protected $userPoolId;

    /**
     * CognitoClient constructor.
     *
     * @param  CognitoIdentityProviderClient  $client
     * @param  string  $userPoolId
     */
    public function __construct(CognitoIdentityProviderClient $client, $userPoolId)
    {
        $this->client = $client;
        $this->userPoolId = $userPoolId;
    }

    /**
     * Gets the specified user by user name in a user pool as an administrator.
     *
     * @param string $username
     * @return mixed
     * 
     * @see https://docs.aws.amazon.com/aws-sdk-php/v3/api/api-cognito-idp-2016-04-18.html#admingetuser
     */
    public function getUser($username)
    {
        try {
            $user = $this->client->adminGetUser([
                'Username' => $username,
                'UserPoolId' => $this->userPoolId,
            ]);
            return $user;
        } catch (CognitoIdentityProviderException $e) {
            return false;
        }
    }

    /**
     * Deletes a user as an administrator.
     * 
     * @param string $username
     *
     * @see https://docs.aws.amazon.com/aws-sdk-php/v3/api/api-cognito-idp-2016-04-18.html#admindeleteuser
     */
    public function deleteUser($username)
    {
        $this->client->adminDeleteUser([
            'UserPoolId' => $this->userPoolId,
            'Username' => $username,
        ]);
    }

    /**
     * Updates the specified user's attributes.
     *
     * @param string $username
     * @param array $attributes
     * 
     * @see https://docs.aws.amazon.com/aws-sdk-php/v3/api/api-cognito-idp-2016-04-18.html#adminupdateuserattributes
     */
    public function updateUserAttributes($username, array $attributes = [])
    {
         $this->client->adminUpdateUserAttributes([
            'Username' => $username,
            'UserPoolId' => $this->userPoolId,
            'UserAttributes' => $this->buildAttributesArray($attributes),
        ]);
    }

    /**
     * Build attributes in Name/Value array.
     * 
     * @param array $attributes
     * @return array
     */
    private function buildAttributesArray(array $attributes): array
    {
        $userAttributes = [];
        foreach ($attributes as $key => $value) {
            $userAttributes[] = [
                'Name' => (string)$key,
                'Value' => (string)$value,
            ];
        }
        return $userAttributes;
    }
}
