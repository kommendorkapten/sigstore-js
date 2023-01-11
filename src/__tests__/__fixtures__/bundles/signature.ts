///////////////////////////////////////////////////////////////////////////////
// VALID BUNDLES
///////////////////////////////////////////////////////////////////////////////

// Valid messageSignature bundle signed with a Fulcio signing certificate
const validBundleWithSigningCert = {
  mediaType: 'application/vnd.dev.sigstore.bundle+json;version=0.1',
  verificationMaterial: {
    x509CertificateChain: {
      certificates: [
        {
          rawBytes:
            'MIICoDCCAiagAwIBAgIUevae+nLQ8mg6OyOB43MKJ10F2CEwCgYIKoZIzj0EAwMwNzEVMBMGA1UEChMMc2lnc3RvcmUuZGV2MR4wHAYDVQQDExVzaWdzdG9yZS1pbnRlcm1lZGlhdGUwHhcNMjIxMTA5MDEzMzA5WhcNMjIxMTA5MDE0MzA5WjAAMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE9DbYBIMQLtWb6J5gtL69jgRwwEfdtQtKvvG4+o3ZzlOroJplpXaVgF6wBDob++rNG9/AzSaBmApkEwI52XBjWqOCAUUwggFBMA4GA1UdDwEB/wQEAwIHgDATBgNVHSUEDDAKBggrBgEFBQcDAzAdBgNVHQ4EFgQUVIIFc08z6uV9Y96S+v5oDbbmHEYwHwYDVR0jBBgwFoAU39Ppz1YkEZb5qNjpKFWixi4YZD8wHwYDVR0RAQH/BBUwE4ERYnJpYW5AZGVoYW1lci5jb20wLAYKKwYBBAGDvzABAQQeaHR0cHM6Ly9naXRodWIuY29tL2xvZ2luL29hdXRoMIGKBgorBgEEAdZ5AgQCBHwEegB4AHYA3T0wasbHETJjGR4cmWc3AqJKXrjePK3/h4pygC8p7o4AAAGEWgUGQwAABAMARzBFAiEAlKycMBC2q+QM+mct60RNENxpURHes6vgOBWdx71XcXgCIAtnMzw/cBw5h0hrYJ8b1PJjoxn3k1N2TdgofqvMhbSTMAoGCCqGSM49BAMDA2gAMGUCMQC2KLFYSiD/+S1WEsyf9czf52w+E577Hi77r8pGUM1rQ/Bzg1aGvQs0/kAg3S/JSDgCMEdN5dIS0tRm1SOMbOFcW+1yzR+OiCVJ7DVFwUdI3D/7ERxtN9e/LJ6uaRnR/Sanrw==',
        },
        {
          rawBytes:
            'MIICGjCCAaGgAwIBAgIUALnViVfnU0brJasmRkHrn/UnfaQwCgYIKoZIzj0EAwMwKjEVMBMGA1UEChMMc2lnc3RvcmUuZGV2MREwDwYDVQQDEwhzaWdzdG9yZTAeFw0yMjA0MTMyMDA2MTVaFw0zMTEwMDUxMzU2NThaMDcxFTATBgNVBAoTDHNpZ3N0b3JlLmRldjEeMBwGA1UEAxMVc2lnc3RvcmUtaW50ZXJtZWRpYXRlMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE8RVS/ysH+NOvuDZyPIZtilgUF9NlarYpAd9HP1vBBH1U5CV77LSS7s0ZiH4nE7Hv7ptS6LvvR/STk798LVgMzLlJ4HeIfF3tHSaexLcYpSASr1kS0N/RgBJz/9jWCiXno3sweTAOBgNVHQ8BAf8EBAMCAQYwEwYDVR0lBAwwCgYIKwYBBQUHAwMwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQU39Ppz1YkEZb5qNjpKFWixi4YZD8wHwYDVR0jBBgwFoAUWMAeX5FFpWapesyQoZMi0CrFxfowCgYIKoZIzj0EAwMDZwAwZAIwPCsQK4DYiZYDPIaDi5HFKnfxXx6ASSVmERfsynYBiX2X6SJRnZU84/9DZdnFvvxmAjBOt6QpBlc4J/0DxvkTCqpclvziL6BCCPnjdlIB3Pu3BxsPmygUY7Ii2zbdCdliiow=',
        },
        {
          rawBytes:
            'MIIB9zCCAXygAwIBAgIUALZNAPFdxHPwjeDloDwyYChAO/4wCgYIKoZIzj0EAwMwKjEVMBMGA1UEChMMc2lnc3RvcmUuZGV2MREwDwYDVQQDEwhzaWdzdG9yZTAeFw0yMTEwMDcxMzU2NTlaFw0zMTEwMDUxMzU2NThaMCoxFTATBgNVBAoTDHNpZ3N0b3JlLmRldjERMA8GA1UEAxMIc2lnc3RvcmUwdjAQBgcqhkjOPQIBBgUrgQQAIgNiAAT7XeFT4rb3PQGwS4IajtLk3/OlnpgangaBclYpsYBr5i+4ynB07ceb3LP0OIOZdxexX69c5iVuyJRQ+Hz05yi+UF3uBWAlHpiS5sh0+H2GHE7SXrk1EC5m1Tr19L9gg92jYzBhMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBRYwB5fkUWlZql6zJChkyLQKsXF+jAfBgNVHSMEGDAWgBRYwB5fkUWlZql6zJChkyLQKsXF+jAKBggqhkjOPQQDAwNpADBmAjEAj1nHeXZp+13NWBNa+EDsDP8G1WWg1tCMWP/WHPqpaVo0jhsweNFZgSs0eE7wYI4qAjEA2WB9ot98sIkoF3vZYdd3/VtWB5b9TNMea7Ix/stJ5TfcLLeABLE4BNJOsQ4vnBHJ',
        },
      ],
    },
    publicKey: undefined,
    tlogEntries: [
      {
        logIndex: '6757503',
        logId: { keyId: 'wNI9atQGlz+VWfO6LRygH4QUfY/8W4RFwiT5i5WRgB0=' },
        kindVersion: { kind: 'hashedrekord', version: '0.0.1' },
        integratedTime: '1667957590',
        inclusionPromise: {
          signedEntryTimestamp:
            'MEUCIFUNcHgHB318gCNJR0/CH4E0daODbnfePyzKCDqrt3twAiEA9N+ZObaLwVJwvOtPgkfoBa5NzjTH0eC06YBlOyZlMiY=',
        },
        inclusionProof: undefined,
        canonicalizedBody:
          'eyJhcGlWZXJzaW9uIjoiMC4wLjEiLCJraW5kIjoiaGFzaGVkcmVrb3JkIiwic3BlYyI6eyJkYXRhIjp7Imhhc2giOnsiYWxnb3JpdGhtIjoic2hhMjU2IiwidmFsdWUiOiI2OGU2NTZiMjUxZTY3ZTgzNThiZWY4NDgzYWIwZDUxYzY2MTlmM2U3YTFhOWYwZTc1ODM4ZDQxZmYzNjhmNzI4In19LCJzaWduYXR1cmUiOnsiY29udGVudCI6Ik1FUUNJSHM1YVV1bHExSHBSK2Z3bVNLcExrL29Bd3E1TzlDRE5GSGhaQUtmRzVHbUFpQndjVm5mMm9ienNDR1ZsZjBBSXZidkhyMjFOWHQ3dHBMQmw0K0JyaDZPS0E9PSIsInB1YmxpY0tleSI6eyJjb250ZW50IjoiTFMwdExTMUNSVWRKVGlCRFJWSlVTVVpKUTBGVVJTMHRMUzB0Q2sxSlNVTnZSRU5EUVdsaFowRjNTVUpCWjBsVlpYWmhaU3R1VEZFNGJXYzJUM2xQUWpRelRVdEtNVEJHTWtORmQwTm5XVWxMYjFwSmVtb3dSVUYzVFhjS1RucEZWazFDVFVkQk1WVkZRMmhOVFdNeWJHNWpNMUoyWTIxVmRWcEhWakpOVWpSM1NFRlpSRlpSVVVSRmVGWjZZVmRrZW1SSE9YbGFVekZ3WW01U2JBcGpiVEZzV2tkc2FHUkhWWGRJYUdOT1RXcEplRTFVUVRWTlJFVjZUWHBCTlZkb1kwNU5ha2w0VFZSQk5VMUVSVEJOZWtFMVYycEJRVTFHYTNkRmQxbElDa3R2V2tsNmFqQkRRVkZaU1V0dldrbDZhakJFUVZGalJGRm5RVVU1UkdKWlFrbE5VVXgwVjJJMlNqVm5kRXcyT1dwblVuZDNSV1prZEZGMFMzWjJSelFLSzI4elducHNUM0p2U25Cc2NGaGhWbWRHTm5kQ1JHOWlLeXR5VGtjNUwwRjZVMkZDYlVGd2EwVjNTVFV5V0VKcVYzRlBRMEZWVlhkblowWkNUVUUwUndwQk1WVmtSSGRGUWk5M1VVVkJkMGxJWjBSQlZFSm5UbFpJVTFWRlJFUkJTMEpuWjNKQ1owVkdRbEZqUkVGNlFXUkNaMDVXU0ZFMFJVWm5VVlZXU1VsR0NtTXdPSG8yZFZZNVdUazJVeXQyTlc5RVltSnRTRVZaZDBoM1dVUldVakJxUWtKbmQwWnZRVlV6T1ZCd2VqRlphMFZhWWpWeFRtcHdTMFpYYVhocE5Ga0tXa1E0ZDBoM1dVUldVakJTUVZGSUwwSkNWWGRGTkVWU1dXNUtjRmxYTlVGYVIxWnZXVmN4YkdOcE5XcGlNakIzVEVGWlMwdDNXVUpDUVVkRWRucEJRZ3BCVVZGbFlVaFNNR05JVFRaTWVUbHVZVmhTYjJSWFNYVlpNamwwVERKNGRsb3liSFZNTWpsb1pGaFNiMDFKUjB0Q1oyOXlRbWRGUlVGa1dqVkJaMUZEQ2tKSWQwVmxaMEkwUVVoWlFUTlVNSGRoYzJKSVJWUktha2RTTkdOdFYyTXpRWEZLUzFoeWFtVlFTek12YURSd2VXZERPSEEzYnpSQlFVRkhSVmRuVlVjS1VYZEJRVUpCVFVGU2VrSkdRV2xGUVd4TGVXTk5Ra015Y1N0UlRTdHRZM1EyTUZKT1JVNTRjRlZTU0dWek5uWm5UMEpYWkhnM01WaGpXR2REU1VGMGJncE5lbmN2WTBKM05XZ3dhSEpaU2poaU1WQkthbTk0YmpOck1VNHlWR1JuYjJaeGRrMW9ZbE5VVFVGdlIwTkRjVWRUVFRRNVFrRk5SRUV5WjBGTlIxVkRDazFSUXpKTFRFWlpVMmxFTHl0VE1WZEZjM2xtT1dONlpqVXlkeXRGTlRjM1NHazNOM0k0Y0VkVlRURnlVUzlDZW1jeFlVZDJVWE13TDJ0Qlp6TlRMMG9LVTBSblEwMUZaRTQxWkVsVE1IUlNiVEZUVDAxaVQwWmpWeXN4ZVhwU0swOXBRMVpLTjBSV1JuZFZaRWt6UkM4M1JWSjRkRTQ1WlM5TVNqWjFZVkp1VWdvdlUyRnVjbmM5UFFvdExTMHRMVVZPUkNCRFJWSlVTVVpKUTBGVVJTMHRMUzB0Q2c9PSJ9fX19',
      },
    ],
    timestampVerificationData: { rfc3161Timestamps: [] },
  },
  messageSignature: {
    messageDigest: {
      algorithm: 'SHA2_256',
      digest: 'aOZWslHmfoNYvvhIOrDVHGYZ8+ehqfDnWDjUH/No9yg=',
    },
    signature:
      'MEQCIHs5aUulq1HpR+fwmSKpLk/oAwq5O9CDNFHhZAKfG5GmAiBwcVnf2obzsCGVlf0AIvbvHr21NXt7tpLBl4+Brh6OKA==',
  },
  dsseEnvelope: undefined,
};

// Valid messageSignature bundle signed with a public key
const validBundleWithPublicKey = {
  mediaType: 'application/vnd.dev.sigstore.bundle+json;version=0.1',
  verificationMaterial: {
    publicKey: {
      hint: '9a76331edc1cfd3933040996615b1c06adbe6f9b4f11df4106dcceb66e3bdb1b',
    },
    tlogEntries: [
      {
        logIndex: '6757503',
        logId: { keyId: 'wNI9atQGlz+VWfO6LRygH4QUfY/8W4RFwiT5i5WRgB0=' },
        kindVersion: { kind: 'hashedrekord', version: '0.0.1' },
        integratedTime: '1667957590',
        inclusionPromise: {
          signedEntryTimestamp:
            'MEUCIFUNcHgHB318gCNJR0/CH4E0daODbnfePyzKCDqrt3twAiEA9N+ZObaLwVJwvOtPgkfoBa5NzjTH0eC06YBlOyZlMiY=',
        },
        canonicalizedBody:
          'eyJhcGlWZXJzaW9uIjoiMC4wLjEiLCJraW5kIjoiaGFzaGVkcmVrb3JkIiwic3BlYyI6eyJkYXRhIjp7Imhhc2giOnsiYWxnb3JpdGhtIjoic2hhMjU2IiwidmFsdWUiOiI2OGU2NTZiMjUxZTY3ZTgzNThiZWY4NDgzYWIwZDUxYzY2MTlmM2U3YTFhOWYwZTc1ODM4ZDQxZmYzNjhmNzI4In19LCJzaWduYXR1cmUiOnsiY29udGVudCI6Ik1FUUNJSHM1YVV1bHExSHBSK2Z3bVNLcExrL29Bd3E1TzlDRE5GSGhaQUtmRzVHbUFpQndjVm5mMm9ienNDR1ZsZjBBSXZidkhyMjFOWHQ3dHBMQmw0K0JyaDZPS0E9PSIsInB1YmxpY0tleSI6eyJjb250ZW50IjoiTFMwdExTMUNSVWRKVGlCRFJWSlVTVVpKUTBGVVJTMHRMUzB0Q2sxSlNVTnZSRU5EUVdsaFowRjNTVUpCWjBsVlpYWmhaU3R1VEZFNGJXYzJUM2xQUWpRelRVdEtNVEJHTWtORmQwTm5XVWxMYjFwSmVtb3dSVUYzVFhjS1RucEZWazFDVFVkQk1WVkZRMmhOVFdNeWJHNWpNMUoyWTIxVmRWcEhWakpOVWpSM1NFRlpSRlpSVVVSRmVGWjZZVmRrZW1SSE9YbGFVekZ3WW01U2JBcGpiVEZzV2tkc2FHUkhWWGRJYUdOT1RXcEplRTFVUVRWTlJFVjZUWHBCTlZkb1kwNU5ha2w0VFZSQk5VMUVSVEJOZWtFMVYycEJRVTFHYTNkRmQxbElDa3R2V2tsNmFqQkRRVkZaU1V0dldrbDZhakJFUVZGalJGRm5RVVU1UkdKWlFrbE5VVXgwVjJJMlNqVm5kRXcyT1dwblVuZDNSV1prZEZGMFMzWjJSelFLSzI4elducHNUM0p2U25Cc2NGaGhWbWRHTm5kQ1JHOWlLeXR5VGtjNUwwRjZVMkZDYlVGd2EwVjNTVFV5V0VKcVYzRlBRMEZWVlhkblowWkNUVUUwUndwQk1WVmtSSGRGUWk5M1VVVkJkMGxJWjBSQlZFSm5UbFpJVTFWRlJFUkJTMEpuWjNKQ1owVkdRbEZqUkVGNlFXUkNaMDVXU0ZFMFJVWm5VVlZXU1VsR0NtTXdPSG8yZFZZNVdUazJVeXQyTlc5RVltSnRTRVZaZDBoM1dVUldVakJxUWtKbmQwWnZRVlV6T1ZCd2VqRlphMFZhWWpWeFRtcHdTMFpYYVhocE5Ga0tXa1E0ZDBoM1dVUldVakJTUVZGSUwwSkNWWGRGTkVWU1dXNUtjRmxYTlVGYVIxWnZXVmN4YkdOcE5XcGlNakIzVEVGWlMwdDNXVUpDUVVkRWRucEJRZ3BCVVZGbFlVaFNNR05JVFRaTWVUbHVZVmhTYjJSWFNYVlpNamwwVERKNGRsb3liSFZNTWpsb1pGaFNiMDFKUjB0Q1oyOXlRbWRGUlVGa1dqVkJaMUZEQ2tKSWQwVmxaMEkwUVVoWlFUTlVNSGRoYzJKSVJWUktha2RTTkdOdFYyTXpRWEZLUzFoeWFtVlFTek12YURSd2VXZERPSEEzYnpSQlFVRkhSVmRuVlVjS1VYZEJRVUpCVFVGU2VrSkdRV2xGUVd4TGVXTk5Ra015Y1N0UlRTdHRZM1EyTUZKT1JVNTRjRlZTU0dWek5uWm5UMEpYWkhnM01WaGpXR2REU1VGMGJncE5lbmN2WTBKM05XZ3dhSEpaU2poaU1WQkthbTk0YmpOck1VNHlWR1JuYjJaeGRrMW9ZbE5VVFVGdlIwTkRjVWRUVFRRNVFrRk5SRUV5WjBGTlIxVkRDazFSUXpKTFRFWlpVMmxFTHl0VE1WZEZjM2xtT1dONlpqVXlkeXRGTlRjM1NHazNOM0k0Y0VkVlRURnlVUzlDZW1jeFlVZDJVWE13TDJ0Qlp6TlRMMG9LVTBSblEwMUZaRTQxWkVsVE1IUlNiVEZUVDAxaVQwWmpWeXN4ZVhwU0swOXBRMVpLTjBSV1JuZFZaRWt6UkM4M1JWSjRkRTQ1WlM5TVNqWjFZVkp1VWdvdlUyRnVjbmM5UFFvdExTMHRMVVZPUkNCRFJWSlVTVVpKUTBGVVJTMHRMUzB0Q2c9PSJ9fX19',
      },
    ],
    timestampVerificationData: { rfc3161Timestamps: [] },
  },
  messageSignature: {
    messageDigest: {
      algorithm: 'SHA2_256',
      digest: 'aOZWslHmfoNYvvhIOrDVHGYZ8+ehqfDnWDjUH/No9yg=',
    },
    signature:
      'MEQCIHs5aUulq1HpR+fwmSKpLk/oAwq5O9CDNFHhZAKfG5GmAiBwcVnf2obzsCGVlf0AIvbvHr21NXt7tpLBl4+Brh6OKA==',
  },
};

// Public key material for verifying the above bundle
const publicKey = `-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE9DbYBIMQLtWb6J5gtL69jgRwwEfd
tQtKvvG4+o3ZzlOroJplpXaVgF6wBDob++rNG9/AzSaBmApkEwI52XBjWg==
-----END PUBLIC KEY-----`;

///////////////////////////////////////////////////////////////////////////////
// INVALID BUNDLES
///////////////////////////////////////////////////////////////////////////////

// Invalid messageSignature bundle - expired certificate
// This bundle has a valid signature (the public key in the signing
// certificate properly verifies the signature). Also, the SET is valid
// (this was a real entry added to Rekor. However, the timestamp of the
// Rekor entry is outside the validity period of the certificate.
const invalidExpiredCert = {
  mediaType: 'application/vnd.dev.sigstore.bundle+json;version=0.1',
  verificationMaterial: {
    x509CertificateChain: {
      certificates: [
        {
          rawBytes:
            'MIICnzCCAiWgAwIBAgIUL5RT/0zJNjb8IcZZjqaMM+nbFN8wCgYIKoZIzj0EAwMwNzEVMBMGA1UEChMMc2lnc3RvcmUuZGV2MR4wHAYDVQQDExVzaWdzdG9yZS1pbnRlcm1lZGlhdGUwHhcNMjIxMDMwMTkwMTM2WhcNMjIxMDMwMTkxMTM2WjAAMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEIr5XHtIa1AmprgTYwtjl6WaAI8GLVXoUk5iRsr+aw0z2LVBEGaiWhpcAntxdN6h4YfQskDpKjmknjXfGy8/oTaOCAUQwggFAMA4GA1UdDwEB/wQEAwIHgDATBgNVHSUEDDAKBggrBgEFBQcDAzAdBgNVHQ4EFgQUKeKh9ygNk/Ev2HvsYhBEeF15GU4wHwYDVR0jBBgwFoAU39Ppz1YkEZb5qNjpKFWixi4YZD8wHwYDVR0RAQH/BBUwE4ERYnJpYW5AZGVoYW1lci5jb20wLAYKKwYBBAGDvzABAQQeaHR0cHM6Ly9naXRodWIuY29tL2xvZ2luL29hdXRoMIGJBgorBgEEAdZ5AgQCBHsEeQB3AHUACGCS8ChS/2hF0dFrJ4ScRWcYrBY9wzjSbea8IgY2b3IAAAGEKkVPFQAABAMARjBEAiA2T7br2/r4Ox3zXlYoUxKbPQIxzOLHV8ocmp1SOSbQOgIgZ1G2biiCl/V0w0FuusoT7Ojw6lJUaLqipRK1qpvrPfYwCgYIKoZIzj0EAwMDaAAwZQIxAOlgn/9dfnuXzvp7pOg5PBwlIxvduDtDyQkRB2EcpQs1p3Qz9dPZ9e9U1Lb/X8t4ywIwBicA0HL2cs/Hj0WZx2GjQFlY/VA5lWsmuz6iUOFyGQ9ESgJJiH/YzfOCfC+NVZdl',
        },
      ],
    },
    tlogEntries: [
      {
        logIndex: '6175802',
        logId: { keyId: 'wNI9atQGlz+VWfO6LRygH4QUfY/8W4RFwiT5i5WRgB0=' },
        kindVersion: { kind: 'hashedrekord', version: '0.0.1' },
        canonicalizedBody:
          'eyJhcGlWZXJzaW9uIjoiMC4wLjEiLCJraW5kIjoiaGFzaGVkcmVrb3JkIiwic3BlYyI6eyJkYXRhIjp7Imhhc2giOnsiYWxnb3JpdGhtIjoic2hhMjU2IiwidmFsdWUiOiI2OGU2NTZiMjUxZTY3ZTgzNThiZWY4NDgzYWIwZDUxYzY2MTlmM2U3YTFhOWYwZTc1ODM4ZDQxZmYzNjhmNzI4In19LCJzaWduYXR1cmUiOnsiY29udGVudCI6Ik1FWUNJUUNYejc5V2JoWGgzYnlxVVhtZExwbTVKUXV4RmM1MU05Um05ODFkTEpFN0hBSWhBS0xLUk9Sc0dJWDVjWFRVMmp2VTJ1eUFOSmZlVUVHaHhYNU5SNlpLNDY4bSIsInB1YmxpY0tleSI6eyJjb250ZW50IjoiTFMwdExTMUNSVWRKVGlCRFJWSlVTVVpKUTBGVVJTMHRMUzB0Q2sxSlNVTnVla05EUVdsWFowRjNTVUpCWjBsVlREVlNWQzh3ZWtwT2FtSTRTV05hV21weFlVMU5LMjVpUms0NGQwTm5XVWxMYjFwSmVtb3dSVUYzVFhjS1RucEZWazFDVFVkQk1WVkZRMmhOVFdNeWJHNWpNMUoyWTIxVmRWcEhWakpOVWpSM1NFRlpSRlpSVVVSRmVGWjZZVmRrZW1SSE9YbGFVekZ3WW01U2JBcGpiVEZzV2tkc2FHUkhWWGRJYUdOT1RXcEplRTFFVFhkTlZHdDNUVlJOTWxkb1kwNU5ha2w0VFVSTmQwMVVhM2hOVkUweVYycEJRVTFHYTNkRmQxbElDa3R2V2tsNmFqQkRRVkZaU1V0dldrbDZhakJFUVZGalJGRm5RVVZKY2pWWVNIUkpZVEZCYlhCeVoxUlpkM1JxYkRaWFlVRkpPRWRNVmxodlZXczFhVklLYzNJcllYY3dlakpNVmtKRlIyRnBWMmh3WTBGdWRIaGtUalpvTkZsbVVYTnJSSEJMYW0xcmJtcFlaa2Q1T0M5dlZHRlBRMEZWVVhkblowWkJUVUUwUndwQk1WVmtSSGRGUWk5M1VVVkJkMGxJWjBSQlZFSm5UbFpJVTFWRlJFUkJTMEpuWjNKQ1owVkdRbEZqUkVGNlFXUkNaMDVXU0ZFMFJVWm5VVlZMWlV0b0NqbDVaMDVyTDBWMk1raDJjMWxvUWtWbFJqRTFSMVUwZDBoM1dVUldVakJxUWtKbmQwWnZRVlV6T1ZCd2VqRlphMFZhWWpWeFRtcHdTMFpYYVhocE5Ga0tXa1E0ZDBoM1dVUldVakJTUVZGSUwwSkNWWGRGTkVWU1dXNUtjRmxYTlVGYVIxWnZXVmN4YkdOcE5XcGlNakIzVEVGWlMwdDNXVUpDUVVkRWRucEJRZ3BCVVZGbFlVaFNNR05JVFRaTWVUbHVZVmhTYjJSWFNYVlpNamwwVERKNGRsb3liSFZNTWpsb1pGaFNiMDFKUjBwQ1oyOXlRbWRGUlVGa1dqVkJaMUZEQ2tKSWMwVmxVVUl6UVVoVlFVTkhRMU00UTJoVEx6Sm9SakJrUm5KS05GTmpVbGRqV1hKQ1dUbDNlbXBUWW1WaE9FbG5XVEppTTBsQlFVRkhSVXRyVmxBS1JsRkJRVUpCVFVGU2FrSkZRV2xCTWxRM1luSXlMM0kwVDNnemVsaHNXVzlWZUV0aVVGRkplSHBQVEVoV09HOWpiWEF4VTA5VFlsRlBaMGxuV2pGSE1ncGlhV2xEYkM5V01IY3dSblYxYzI5VU4wOXFkelpzU2xWaFRIRnBjRkpMTVhGd2RuSlFabGwzUTJkWlNVdHZXa2w2YWpCRlFYZE5SR0ZCUVhkYVVVbDRDa0ZQYkdkdUx6bGtabTUxV0hwMmNEZHdUMmMxVUVKM2JFbDRkbVIxUkhSRWVWRnJVa0l5UldOd1VYTXhjRE5SZWpsa1VGbzVaVGxWTVV4aUwxZzRkRFFLZVhkSmQwSnBZMEV3U0V3eVkzTXZTR293VjFwNE1rZHFVVVpzV1M5V1FUVnNWM050ZFhvMmFWVlBSbmxIVVRsRlUyZEtTbWxJTDFsNlprOURaa01yVGdwV1dtUnNDaTB0TFMwdFJVNUVJRU5GVWxSSlJrbERRVlJGTFMwdExTMEsifX19fQ==',
        integratedTime: '1667157111',
        inclusionPromise: {
          signedEntryTimestamp:
            'MEQCIEYKojgVMMYh0AAIXhdXWwBs3/ywXvwGJjrGbBnckwsnAiBn29rNkIj7Gr6OgcnPlY6ZHbR2mM9cq5p2d/FBAKQOuw==',
        },
        inclusionProof: undefined,
      },
    ],
    timestampVerificationData: { rfc3161Timestamps: [] },
    publicKey: undefined,
  },
  messageSignature: {
    messageDigest: {
      algorithm: 'SHA2_256',
      digest: 'aOZWslHmfoNYvvhIOrDVHGYZ8+ehqfDnWDjUH/No9yg=',
    },
    signature:
      'MEYCIQCXz79WbhXh3byqUXmdLpm5JQuxFc51M9Rm981dLJE7HAIhAKLKRORsGIX5cXTU2jvU2uyANJfeUEGhxX5NR6ZK468m',
  },
  dsseEnvelope: undefined,
};

// Invalid messageSignature bundle - integratedTime altered, invalidating SET
const invalidSET = {
  mediaType: 'application/vnd.dev.sigstore.bundle+json;version=0.1',
  verificationMaterial: {
    x509CertificateChain: {
      certificates: [
        {
          rawBytes:
            'MIICoDCCAiagAwIBAgIUevae+nLQ8mg6OyOB43MKJ10F2CEwCgYIKoZIzj0EAwMwNzEVMBMGA1UEChMMc2lnc3RvcmUuZGV2MR4wHAYDVQQDExVzaWdzdG9yZS1pbnRlcm1lZGlhdGUwHhcNMjIxMTA5MDEzMzA5WhcNMjIxMTA5MDE0MzA5WjAAMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE9DbYBIMQLtWb6J5gtL69jgRwwEfdtQtKvvG4+o3ZzlOroJplpXaVgF6wBDob++rNG9/AzSaBmApkEwI52XBjWqOCAUUwggFBMA4GA1UdDwEB/wQEAwIHgDATBgNVHSUEDDAKBggrBgEFBQcDAzAdBgNVHQ4EFgQUVIIFc08z6uV9Y96S+v5oDbbmHEYwHwYDVR0jBBgwFoAU39Ppz1YkEZb5qNjpKFWixi4YZD8wHwYDVR0RAQH/BBUwE4ERYnJpYW5AZGVoYW1lci5jb20wLAYKKwYBBAGDvzABAQQeaHR0cHM6Ly9naXRodWIuY29tL2xvZ2luL29hdXRoMIGKBgorBgEEAdZ5AgQCBHwEegB4AHYA3T0wasbHETJjGR4cmWc3AqJKXrjePK3/h4pygC8p7o4AAAGEWgUGQwAABAMARzBFAiEAlKycMBC2q+QM+mct60RNENxpURHes6vgOBWdx71XcXgCIAtnMzw/cBw5h0hrYJ8b1PJjoxn3k1N2TdgofqvMhbSTMAoGCCqGSM49BAMDA2gAMGUCMQC2KLFYSiD/+S1WEsyf9czf52w+E577Hi77r8pGUM1rQ/Bzg1aGvQs0/kAg3S/JSDgCMEdN5dIS0tRm1SOMbOFcW+1yzR+OiCVJ7DVFwUdI3D/7ERxtN9e/LJ6uaRnR/Sanrw==',
        },
        {
          rawBytes:
            'MIICGjCCAaGgAwIBAgIUALnViVfnU0brJasmRkHrn/UnfaQwCgYIKoZIzj0EAwMwKjEVMBMGA1UEChMMc2lnc3RvcmUuZGV2MREwDwYDVQQDEwhzaWdzdG9yZTAeFw0yMjA0MTMyMDA2MTVaFw0zMTEwMDUxMzU2NThaMDcxFTATBgNVBAoTDHNpZ3N0b3JlLmRldjEeMBwGA1UEAxMVc2lnc3RvcmUtaW50ZXJtZWRpYXRlMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE8RVS/ysH+NOvuDZyPIZtilgUF9NlarYpAd9HP1vBBH1U5CV77LSS7s0ZiH4nE7Hv7ptS6LvvR/STk798LVgMzLlJ4HeIfF3tHSaexLcYpSASr1kS0N/RgBJz/9jWCiXno3sweTAOBgNVHQ8BAf8EBAMCAQYwEwYDVR0lBAwwCgYIKwYBBQUHAwMwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQU39Ppz1YkEZb5qNjpKFWixi4YZD8wHwYDVR0jBBgwFoAUWMAeX5FFpWapesyQoZMi0CrFxfowCgYIKoZIzj0EAwMDZwAwZAIwPCsQK4DYiZYDPIaDi5HFKnfxXx6ASSVmERfsynYBiX2X6SJRnZU84/9DZdnFvvxmAjBOt6QpBlc4J/0DxvkTCqpclvziL6BCCPnjdlIB3Pu3BxsPmygUY7Ii2zbdCdliiow=',
        },
        {
          rawBytes:
            'MIIB9zCCAXygAwIBAgIUALZNAPFdxHPwjeDloDwyYChAO/4wCgYIKoZIzj0EAwMwKjEVMBMGA1UEChMMc2lnc3RvcmUuZGV2MREwDwYDVQQDEwhzaWdzdG9yZTAeFw0yMTEwMDcxMzU2NTlaFw0zMTEwMDUxMzU2NThaMCoxFTATBgNVBAoTDHNpZ3N0b3JlLmRldjERMA8GA1UEAxMIc2lnc3RvcmUwdjAQBgcqhkjOPQIBBgUrgQQAIgNiAAT7XeFT4rb3PQGwS4IajtLk3/OlnpgangaBclYpsYBr5i+4ynB07ceb3LP0OIOZdxexX69c5iVuyJRQ+Hz05yi+UF3uBWAlHpiS5sh0+H2GHE7SXrk1EC5m1Tr19L9gg92jYzBhMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBRYwB5fkUWlZql6zJChkyLQKsXF+jAfBgNVHSMEGDAWgBRYwB5fkUWlZql6zJChkyLQKsXF+jAKBggqhkjOPQQDAwNpADBmAjEAj1nHeXZp+13NWBNa+EDsDP8G1WWg1tCMWP/WHPqpaVo0jhsweNFZgSs0eE7wYI4qAjEA2WB9ot98sIkoF3vZYdd3/VtWB5b9TNMea7Ix/stJ5TfcLLeABLE4BNJOsQ4vnBHJ',
        },
      ],
    },
    publicKey: undefined,
    tlogEntries: [
      {
        logIndex: '6757503',
        logId: { keyId: 'wNI9atQGlz+VWfO6LRygH4QUfY/8W4RFwiT5i5WRgB0=' },
        kindVersion: { kind: 'hashedrekord', version: '0.0.1' },
        integratedTime: '1', // Altered value
        inclusionPromise: {
          signedEntryTimestamp:
            'MEUCIFUNcHgHB318gCNJR0/CH4E0daODbnfePyzKCDqrt3twAiEA9N+ZObaLwVJwvOtPgkfoBa5NzjTH0eC06YBlOyZlMiY=',
        },
        inclusionProof: undefined,
        canonicalizedBody:
          'eyJhcGlWZXJzaW9uIjoiMC4wLjEiLCJraW5kIjoiaGFzaGVkcmVrb3JkIiwic3BlYyI6eyJkYXRhIjp7Imhhc2giOnsiYWxnb3JpdGhtIjoic2hhMjU2IiwidmFsdWUiOiI2OGU2NTZiMjUxZTY3ZTgzNThiZWY4NDgzYWIwZDUxYzY2MTlmM2U3YTFhOWYwZTc1ODM4ZDQxZmYzNjhmNzI4In19LCJzaWduYXR1cmUiOnsiY29udGVudCI6Ik1FUUNJSHM1YVV1bHExSHBSK2Z3bVNLcExrL29Bd3E1TzlDRE5GSGhaQUtmRzVHbUFpQndjVm5mMm9ienNDR1ZsZjBBSXZidkhyMjFOWHQ3dHBMQmw0K0JyaDZPS0E9PSIsInB1YmxpY0tleSI6eyJjb250ZW50IjoiTFMwdExTMUNSVWRKVGlCRFJWSlVTVVpKUTBGVVJTMHRMUzB0Q2sxSlNVTnZSRU5EUVdsaFowRjNTVUpCWjBsVlpYWmhaU3R1VEZFNGJXYzJUM2xQUWpRelRVdEtNVEJHTWtORmQwTm5XVWxMYjFwSmVtb3dSVUYzVFhjS1RucEZWazFDVFVkQk1WVkZRMmhOVFdNeWJHNWpNMUoyWTIxVmRWcEhWakpOVWpSM1NFRlpSRlpSVVVSRmVGWjZZVmRrZW1SSE9YbGFVekZ3WW01U2JBcGpiVEZzV2tkc2FHUkhWWGRJYUdOT1RXcEplRTFVUVRWTlJFVjZUWHBCTlZkb1kwNU5ha2w0VFZSQk5VMUVSVEJOZWtFMVYycEJRVTFHYTNkRmQxbElDa3R2V2tsNmFqQkRRVkZaU1V0dldrbDZhakJFUVZGalJGRm5RVVU1UkdKWlFrbE5VVXgwVjJJMlNqVm5kRXcyT1dwblVuZDNSV1prZEZGMFMzWjJSelFLSzI4elducHNUM0p2U25Cc2NGaGhWbWRHTm5kQ1JHOWlLeXR5VGtjNUwwRjZVMkZDYlVGd2EwVjNTVFV5V0VKcVYzRlBRMEZWVlhkblowWkNUVUUwUndwQk1WVmtSSGRGUWk5M1VVVkJkMGxJWjBSQlZFSm5UbFpJVTFWRlJFUkJTMEpuWjNKQ1owVkdRbEZqUkVGNlFXUkNaMDVXU0ZFMFJVWm5VVlZXU1VsR0NtTXdPSG8yZFZZNVdUazJVeXQyTlc5RVltSnRTRVZaZDBoM1dVUldVakJxUWtKbmQwWnZRVlV6T1ZCd2VqRlphMFZhWWpWeFRtcHdTMFpYYVhocE5Ga0tXa1E0ZDBoM1dVUldVakJTUVZGSUwwSkNWWGRGTkVWU1dXNUtjRmxYTlVGYVIxWnZXVmN4YkdOcE5XcGlNakIzVEVGWlMwdDNXVUpDUVVkRWRucEJRZ3BCVVZGbFlVaFNNR05JVFRaTWVUbHVZVmhTYjJSWFNYVlpNamwwVERKNGRsb3liSFZNTWpsb1pGaFNiMDFKUjB0Q1oyOXlRbWRGUlVGa1dqVkJaMUZEQ2tKSWQwVmxaMEkwUVVoWlFUTlVNSGRoYzJKSVJWUktha2RTTkdOdFYyTXpRWEZLUzFoeWFtVlFTek12YURSd2VXZERPSEEzYnpSQlFVRkhSVmRuVlVjS1VYZEJRVUpCVFVGU2VrSkdRV2xGUVd4TGVXTk5Ra015Y1N0UlRTdHRZM1EyTUZKT1JVNTRjRlZTU0dWek5uWm5UMEpYWkhnM01WaGpXR2REU1VGMGJncE5lbmN2WTBKM05XZ3dhSEpaU2poaU1WQkthbTk0YmpOck1VNHlWR1JuYjJaeGRrMW9ZbE5VVFVGdlIwTkRjVWRUVFRRNVFrRk5SRUV5WjBGTlIxVkRDazFSUXpKTFRFWlpVMmxFTHl0VE1WZEZjM2xtT1dONlpqVXlkeXRGTlRjM1NHazNOM0k0Y0VkVlRURnlVUzlDZW1jeFlVZDJVWE13TDJ0Qlp6TlRMMG9LVTBSblEwMUZaRTQxWkVsVE1IUlNiVEZUVDAxaVQwWmpWeXN4ZVhwU0swOXBRMVpLTjBSV1JuZFZaRWt6UkM4M1JWSjRkRTQ1WlM5TVNqWjFZVkp1VWdvdlUyRnVjbmM5UFFvdExTMHRMVVZPUkNCRFJWSlVTVVpKUTBGVVJTMHRMUzB0Q2c9PSJ9fX19',
      },
    ],
    timestampVerificationData: { rfc3161Timestamps: [] },
  },
  messageSignature: {
    messageDigest: {
      algorithm: 'SHA2_256',
      digest: 'aOZWslHmfoNYvvhIOrDVHGYZ8+ehqfDnWDjUH/No9yg=',
    },
    signature:
      'MEQCIHs5aUulq1HpR+fwmSKpLk/oAwq5O9CDNFHhZAKfG5GmAiBwcVnf2obzsCGVlf0AIvbvHr21NXt7tpLBl4+Brh6OKA==',
  },
  dsseEnvelope: undefined,
};

// Invalid messageSignature bundle - missing SET
const invalidMissingSET = {
  mediaType: 'application/vnd.dev.sigstore.bundle+json;version=0.1',
  verificationMaterial: {
    x509CertificateChain: {
      certificates: [
        {
          rawBytes:
            'MIICoDCCAiagAwIBAgIUevae+nLQ8mg6OyOB43MKJ10F2CEwCgYIKoZIzj0EAwMwNzEVMBMGA1UEChMMc2lnc3RvcmUuZGV2MR4wHAYDVQQDExVzaWdzdG9yZS1pbnRlcm1lZGlhdGUwHhcNMjIxMTA5MDEzMzA5WhcNMjIxMTA5MDE0MzA5WjAAMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE9DbYBIMQLtWb6J5gtL69jgRwwEfdtQtKvvG4+o3ZzlOroJplpXaVgF6wBDob++rNG9/AzSaBmApkEwI52XBjWqOCAUUwggFBMA4GA1UdDwEB/wQEAwIHgDATBgNVHSUEDDAKBggrBgEFBQcDAzAdBgNVHQ4EFgQUVIIFc08z6uV9Y96S+v5oDbbmHEYwHwYDVR0jBBgwFoAU39Ppz1YkEZb5qNjpKFWixi4YZD8wHwYDVR0RAQH/BBUwE4ERYnJpYW5AZGVoYW1lci5jb20wLAYKKwYBBAGDvzABAQQeaHR0cHM6Ly9naXRodWIuY29tL2xvZ2luL29hdXRoMIGKBgorBgEEAdZ5AgQCBHwEegB4AHYA3T0wasbHETJjGR4cmWc3AqJKXrjePK3/h4pygC8p7o4AAAGEWgUGQwAABAMARzBFAiEAlKycMBC2q+QM+mct60RNENxpURHes6vgOBWdx71XcXgCIAtnMzw/cBw5h0hrYJ8b1PJjoxn3k1N2TdgofqvMhbSTMAoGCCqGSM49BAMDA2gAMGUCMQC2KLFYSiD/+S1WEsyf9czf52w+E577Hi77r8pGUM1rQ/Bzg1aGvQs0/kAg3S/JSDgCMEdN5dIS0tRm1SOMbOFcW+1yzR+OiCVJ7DVFwUdI3D/7ERxtN9e/LJ6uaRnR/Sanrw==',
        },
        {
          rawBytes:
            'MIICGjCCAaGgAwIBAgIUALnViVfnU0brJasmRkHrn/UnfaQwCgYIKoZIzj0EAwMwKjEVMBMGA1UEChMMc2lnc3RvcmUuZGV2MREwDwYDVQQDEwhzaWdzdG9yZTAeFw0yMjA0MTMyMDA2MTVaFw0zMTEwMDUxMzU2NThaMDcxFTATBgNVBAoTDHNpZ3N0b3JlLmRldjEeMBwGA1UEAxMVc2lnc3RvcmUtaW50ZXJtZWRpYXRlMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE8RVS/ysH+NOvuDZyPIZtilgUF9NlarYpAd9HP1vBBH1U5CV77LSS7s0ZiH4nE7Hv7ptS6LvvR/STk798LVgMzLlJ4HeIfF3tHSaexLcYpSASr1kS0N/RgBJz/9jWCiXno3sweTAOBgNVHQ8BAf8EBAMCAQYwEwYDVR0lBAwwCgYIKwYBBQUHAwMwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQU39Ppz1YkEZb5qNjpKFWixi4YZD8wHwYDVR0jBBgwFoAUWMAeX5FFpWapesyQoZMi0CrFxfowCgYIKoZIzj0EAwMDZwAwZAIwPCsQK4DYiZYDPIaDi5HFKnfxXx6ASSVmERfsynYBiX2X6SJRnZU84/9DZdnFvvxmAjBOt6QpBlc4J/0DxvkTCqpclvziL6BCCPnjdlIB3Pu3BxsPmygUY7Ii2zbdCdliiow=',
        },
        {
          rawBytes:
            'MIIB9zCCAXygAwIBAgIUALZNAPFdxHPwjeDloDwyYChAO/4wCgYIKoZIzj0EAwMwKjEVMBMGA1UEChMMc2lnc3RvcmUuZGV2MREwDwYDVQQDEwhzaWdzdG9yZTAeFw0yMTEwMDcxMzU2NTlaFw0zMTEwMDUxMzU2NThaMCoxFTATBgNVBAoTDHNpZ3N0b3JlLmRldjERMA8GA1UEAxMIc2lnc3RvcmUwdjAQBgcqhkjOPQIBBgUrgQQAIgNiAAT7XeFT4rb3PQGwS4IajtLk3/OlnpgangaBclYpsYBr5i+4ynB07ceb3LP0OIOZdxexX69c5iVuyJRQ+Hz05yi+UF3uBWAlHpiS5sh0+H2GHE7SXrk1EC5m1Tr19L9gg92jYzBhMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBRYwB5fkUWlZql6zJChkyLQKsXF+jAfBgNVHSMEGDAWgBRYwB5fkUWlZql6zJChkyLQKsXF+jAKBggqhkjOPQQDAwNpADBmAjEAj1nHeXZp+13NWBNa+EDsDP8G1WWg1tCMWP/WHPqpaVo0jhsweNFZgSs0eE7wYI4qAjEA2WB9ot98sIkoF3vZYdd3/VtWB5b9TNMea7Ix/stJ5TfcLLeABLE4BNJOsQ4vnBHJ',
        },
      ],
    },
    tlogEntries: [
      {
        logIndex: '6757503',
        logId: { keyId: 'wNI9atQGlz+VWfO6LRygH4QUfY/8W4RFwiT5i5WRgB0=' },
        kindVersion: { kind: 'hashedrekord', version: '0.0.1' },
        integratedTime: '1667957590',
        inclusionPromise: {}, // Missing SET
        canonicalizedBody:
          'eyJhcGlWZXJzaW9uIjoiMC4wLjEiLCJraW5kIjoiaGFzaGVkcmVrb3JkIiwic3BlYyI6eyJkYXRhIjp7Imhhc2giOnsiYWxnb3JpdGhtIjoic2hhMjU2IiwidmFsdWUiOiI2OGU2NTZiMjUxZTY3ZTgzNThiZWY4NDgzYWIwZDUxYzY2MTlmM2U3YTFhOWYwZTc1ODM4ZDQxZmYzNjhmNzI4In19LCJzaWduYXR1cmUiOnsiY29udGVudCI6Ik1FUUNJSHM1YVV1bHExSHBSK2Z3bVNLcExrL29Bd3E1TzlDRE5GSGhaQUtmRzVHbUFpQndjVm5mMm9ienNDR1ZsZjBBSXZidkhyMjFOWHQ3dHBMQmw0K0JyaDZPS0E9PSIsInB1YmxpY0tleSI6eyJjb250ZW50IjoiTFMwdExTMUNSVWRKVGlCRFJWSlVTVVpKUTBGVVJTMHRMUzB0Q2sxSlNVTnZSRU5EUVdsaFowRjNTVUpCWjBsVlpYWmhaU3R1VEZFNGJXYzJUM2xQUWpRelRVdEtNVEJHTWtORmQwTm5XVWxMYjFwSmVtb3dSVUYzVFhjS1RucEZWazFDVFVkQk1WVkZRMmhOVFdNeWJHNWpNMUoyWTIxVmRWcEhWakpOVWpSM1NFRlpSRlpSVVVSRmVGWjZZVmRrZW1SSE9YbGFVekZ3WW01U2JBcGpiVEZzV2tkc2FHUkhWWGRJYUdOT1RXcEplRTFVUVRWTlJFVjZUWHBCTlZkb1kwNU5ha2w0VFZSQk5VMUVSVEJOZWtFMVYycEJRVTFHYTNkRmQxbElDa3R2V2tsNmFqQkRRVkZaU1V0dldrbDZhakJFUVZGalJGRm5RVVU1UkdKWlFrbE5VVXgwVjJJMlNqVm5kRXcyT1dwblVuZDNSV1prZEZGMFMzWjJSelFLSzI4elducHNUM0p2U25Cc2NGaGhWbWRHTm5kQ1JHOWlLeXR5VGtjNUwwRjZVMkZDYlVGd2EwVjNTVFV5V0VKcVYzRlBRMEZWVlhkblowWkNUVUUwUndwQk1WVmtSSGRGUWk5M1VVVkJkMGxJWjBSQlZFSm5UbFpJVTFWRlJFUkJTMEpuWjNKQ1owVkdRbEZqUkVGNlFXUkNaMDVXU0ZFMFJVWm5VVlZXU1VsR0NtTXdPSG8yZFZZNVdUazJVeXQyTlc5RVltSnRTRVZaZDBoM1dVUldVakJxUWtKbmQwWnZRVlV6T1ZCd2VqRlphMFZhWWpWeFRtcHdTMFpYYVhocE5Ga0tXa1E0ZDBoM1dVUldVakJTUVZGSUwwSkNWWGRGTkVWU1dXNUtjRmxYTlVGYVIxWnZXVmN4YkdOcE5XcGlNakIzVEVGWlMwdDNXVUpDUVVkRWRucEJRZ3BCVVZGbFlVaFNNR05JVFRaTWVUbHVZVmhTYjJSWFNYVlpNamwwVERKNGRsb3liSFZNTWpsb1pGaFNiMDFKUjB0Q1oyOXlRbWRGUlVGa1dqVkJaMUZEQ2tKSWQwVmxaMEkwUVVoWlFUTlVNSGRoYzJKSVJWUktha2RTTkdOdFYyTXpRWEZLUzFoeWFtVlFTek12YURSd2VXZERPSEEzYnpSQlFVRkhSVmRuVlVjS1VYZEJRVUpCVFVGU2VrSkdRV2xGUVd4TGVXTk5Ra015Y1N0UlRTdHRZM1EyTUZKT1JVNTRjRlZTU0dWek5uWm5UMEpYWkhnM01WaGpXR2REU1VGMGJncE5lbmN2WTBKM05XZ3dhSEpaU2poaU1WQkthbTk0YmpOck1VNHlWR1JuYjJaeGRrMW9ZbE5VVFVGdlIwTkRjVWRUVFRRNVFrRk5SRUV5WjBGTlIxVkRDazFSUXpKTFRFWlpVMmxFTHl0VE1WZEZjM2xtT1dONlpqVXlkeXRGTlRjM1NHazNOM0k0Y0VkVlRURnlVUzlDZW1jeFlVZDJVWE13TDJ0Qlp6TlRMMG9LVTBSblEwMUZaRTQxWkVsVE1IUlNiVEZUVDAxaVQwWmpWeXN4ZVhwU0swOXBRMVpLTjBSV1JuZFZaRWt6UkM4M1JWSjRkRTQ1WlM5TVNqWjFZVkp1VWdvdlUyRnVjbmM5UFFvdExTMHRMVVZPUkNCRFJWSlVTVVpKUTBGVVJTMHRMUzB0Q2c9PSJ9fX19',
      },
    ],
    timestampVerificationData: { rfc3161Timestamps: [] },
  },
  messageSignature: {
    messageDigest: {
      algorithm: 'SHA2_256',
      digest: 'aOZWslHmfoNYvvhIOrDVHGYZ8+ehqfDnWDjUH/No9yg=',
    },
    signature:
      'MEQCIHs5aUulq1HpR+fwmSKpLk/oAwq5O9CDNFHhZAKfG5GmAiBwcVnf2obzsCGVlf0AIvbvHr21NXt7tpLBl4+Brh6OKA==',
  },
};

// Invalid messageSignature bundle - version in tlogEntry don't match canonicalizedBody
const invalidTLogVersionMismatch = {
  mediaType: 'application/vnd.dev.sigstore.bundle+json;version=0.1',
  verificationMaterial: {
    x509CertificateChain: {
      certificates: [
        {
          rawBytes:
            'MIICoDCCAiagAwIBAgIUevae+nLQ8mg6OyOB43MKJ10F2CEwCgYIKoZIzj0EAwMwNzEVMBMGA1UEChMMc2lnc3RvcmUuZGV2MR4wHAYDVQQDExVzaWdzdG9yZS1pbnRlcm1lZGlhdGUwHhcNMjIxMTA5MDEzMzA5WhcNMjIxMTA5MDE0MzA5WjAAMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE9DbYBIMQLtWb6J5gtL69jgRwwEfdtQtKvvG4+o3ZzlOroJplpXaVgF6wBDob++rNG9/AzSaBmApkEwI52XBjWqOCAUUwggFBMA4GA1UdDwEB/wQEAwIHgDATBgNVHSUEDDAKBggrBgEFBQcDAzAdBgNVHQ4EFgQUVIIFc08z6uV9Y96S+v5oDbbmHEYwHwYDVR0jBBgwFoAU39Ppz1YkEZb5qNjpKFWixi4YZD8wHwYDVR0RAQH/BBUwE4ERYnJpYW5AZGVoYW1lci5jb20wLAYKKwYBBAGDvzABAQQeaHR0cHM6Ly9naXRodWIuY29tL2xvZ2luL29hdXRoMIGKBgorBgEEAdZ5AgQCBHwEegB4AHYA3T0wasbHETJjGR4cmWc3AqJKXrjePK3/h4pygC8p7o4AAAGEWgUGQwAABAMARzBFAiEAlKycMBC2q+QM+mct60RNENxpURHes6vgOBWdx71XcXgCIAtnMzw/cBw5h0hrYJ8b1PJjoxn3k1N2TdgofqvMhbSTMAoGCCqGSM49BAMDA2gAMGUCMQC2KLFYSiD/+S1WEsyf9czf52w+E577Hi77r8pGUM1rQ/Bzg1aGvQs0/kAg3S/JSDgCMEdN5dIS0tRm1SOMbOFcW+1yzR+OiCVJ7DVFwUdI3D/7ERxtN9e/LJ6uaRnR/Sanrw==',
        },
        {
          rawBytes:
            'MIICGjCCAaGgAwIBAgIUALnViVfnU0brJasmRkHrn/UnfaQwCgYIKoZIzj0EAwMwKjEVMBMGA1UEChMMc2lnc3RvcmUuZGV2MREwDwYDVQQDEwhzaWdzdG9yZTAeFw0yMjA0MTMyMDA2MTVaFw0zMTEwMDUxMzU2NThaMDcxFTATBgNVBAoTDHNpZ3N0b3JlLmRldjEeMBwGA1UEAxMVc2lnc3RvcmUtaW50ZXJtZWRpYXRlMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE8RVS/ysH+NOvuDZyPIZtilgUF9NlarYpAd9HP1vBBH1U5CV77LSS7s0ZiH4nE7Hv7ptS6LvvR/STk798LVgMzLlJ4HeIfF3tHSaexLcYpSASr1kS0N/RgBJz/9jWCiXno3sweTAOBgNVHQ8BAf8EBAMCAQYwEwYDVR0lBAwwCgYIKwYBBQUHAwMwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQU39Ppz1YkEZb5qNjpKFWixi4YZD8wHwYDVR0jBBgwFoAUWMAeX5FFpWapesyQoZMi0CrFxfowCgYIKoZIzj0EAwMDZwAwZAIwPCsQK4DYiZYDPIaDi5HFKnfxXx6ASSVmERfsynYBiX2X6SJRnZU84/9DZdnFvvxmAjBOt6QpBlc4J/0DxvkTCqpclvziL6BCCPnjdlIB3Pu3BxsPmygUY7Ii2zbdCdliiow=',
        },
        {
          rawBytes:
            'MIIB9zCCAXygAwIBAgIUALZNAPFdxHPwjeDloDwyYChAO/4wCgYIKoZIzj0EAwMwKjEVMBMGA1UEChMMc2lnc3RvcmUuZGV2MREwDwYDVQQDEwhzaWdzdG9yZTAeFw0yMTEwMDcxMzU2NTlaFw0zMTEwMDUxMzU2NThaMCoxFTATBgNVBAoTDHNpZ3N0b3JlLmRldjERMA8GA1UEAxMIc2lnc3RvcmUwdjAQBgcqhkjOPQIBBgUrgQQAIgNiAAT7XeFT4rb3PQGwS4IajtLk3/OlnpgangaBclYpsYBr5i+4ynB07ceb3LP0OIOZdxexX69c5iVuyJRQ+Hz05yi+UF3uBWAlHpiS5sh0+H2GHE7SXrk1EC5m1Tr19L9gg92jYzBhMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBRYwB5fkUWlZql6zJChkyLQKsXF+jAfBgNVHSMEGDAWgBRYwB5fkUWlZql6zJChkyLQKsXF+jAKBggqhkjOPQQDAwNpADBmAjEAj1nHeXZp+13NWBNa+EDsDP8G1WWg1tCMWP/WHPqpaVo0jhsweNFZgSs0eE7wYI4qAjEA2WB9ot98sIkoF3vZYdd3/VtWB5b9TNMea7Ix/stJ5TfcLLeABLE4BNJOsQ4vnBHJ',
        },
      ],
    },
    tlogEntries: [
      {
        logIndex: '6757503',
        logId: { keyId: 'wNI9atQGlz+VWfO6LRygH4QUfY/8W4RFwiT5i5WRgB0=' },
        kindVersion: { kind: 'hashedrekord', version: '0.0.X' }, // Altered value
        integratedTime: '1667957590',
        inclusionPromise: {
          signedEntryTimestamp:
            'MEUCIFUNcHgHB318gCNJR0/CH4E0daODbnfePyzKCDqrt3twAiEA9N+ZObaLwVJwvOtPgkfoBa5NzjTH0eC06YBlOyZlMiY=',
        },
        canonicalizedBody:
          'eyJhcGlWZXJzaW9uIjoiMC4wLjEiLCJraW5kIjoiaGFzaGVkcmVrb3JkIiwic3BlYyI6eyJkYXRhIjp7Imhhc2giOnsiYWxnb3JpdGhtIjoic2hhMjU2IiwidmFsdWUiOiI2OGU2NTZiMjUxZTY3ZTgzNThiZWY4NDgzYWIwZDUxYzY2MTlmM2U3YTFhOWYwZTc1ODM4ZDQxZmYzNjhmNzI4In19LCJzaWduYXR1cmUiOnsiY29udGVudCI6Ik1FUUNJSHM1YVV1bHExSHBSK2Z3bVNLcExrL29Bd3E1TzlDRE5GSGhaQUtmRzVHbUFpQndjVm5mMm9ienNDR1ZsZjBBSXZidkhyMjFOWHQ3dHBMQmw0K0JyaDZPS0E9PSIsInB1YmxpY0tleSI6eyJjb250ZW50IjoiTFMwdExTMUNSVWRKVGlCRFJWSlVTVVpKUTBGVVJTMHRMUzB0Q2sxSlNVTnZSRU5EUVdsaFowRjNTVUpCWjBsVlpYWmhaU3R1VEZFNGJXYzJUM2xQUWpRelRVdEtNVEJHTWtORmQwTm5XVWxMYjFwSmVtb3dSVUYzVFhjS1RucEZWazFDVFVkQk1WVkZRMmhOVFdNeWJHNWpNMUoyWTIxVmRWcEhWakpOVWpSM1NFRlpSRlpSVVVSRmVGWjZZVmRrZW1SSE9YbGFVekZ3WW01U2JBcGpiVEZzV2tkc2FHUkhWWGRJYUdOT1RXcEplRTFVUVRWTlJFVjZUWHBCTlZkb1kwNU5ha2w0VFZSQk5VMUVSVEJOZWtFMVYycEJRVTFHYTNkRmQxbElDa3R2V2tsNmFqQkRRVkZaU1V0dldrbDZhakJFUVZGalJGRm5RVVU1UkdKWlFrbE5VVXgwVjJJMlNqVm5kRXcyT1dwblVuZDNSV1prZEZGMFMzWjJSelFLSzI4elducHNUM0p2U25Cc2NGaGhWbWRHTm5kQ1JHOWlLeXR5VGtjNUwwRjZVMkZDYlVGd2EwVjNTVFV5V0VKcVYzRlBRMEZWVlhkblowWkNUVUUwUndwQk1WVmtSSGRGUWk5M1VVVkJkMGxJWjBSQlZFSm5UbFpJVTFWRlJFUkJTMEpuWjNKQ1owVkdRbEZqUkVGNlFXUkNaMDVXU0ZFMFJVWm5VVlZXU1VsR0NtTXdPSG8yZFZZNVdUazJVeXQyTlc5RVltSnRTRVZaZDBoM1dVUldVakJxUWtKbmQwWnZRVlV6T1ZCd2VqRlphMFZhWWpWeFRtcHdTMFpYYVhocE5Ga0tXa1E0ZDBoM1dVUldVakJTUVZGSUwwSkNWWGRGTkVWU1dXNUtjRmxYTlVGYVIxWnZXVmN4YkdOcE5XcGlNakIzVEVGWlMwdDNXVUpDUVVkRWRucEJRZ3BCVVZGbFlVaFNNR05JVFRaTWVUbHVZVmhTYjJSWFNYVlpNamwwVERKNGRsb3liSFZNTWpsb1pGaFNiMDFKUjB0Q1oyOXlRbWRGUlVGa1dqVkJaMUZEQ2tKSWQwVmxaMEkwUVVoWlFUTlVNSGRoYzJKSVJWUktha2RTTkdOdFYyTXpRWEZLUzFoeWFtVlFTek12YURSd2VXZERPSEEzYnpSQlFVRkhSVmRuVlVjS1VYZEJRVUpCVFVGU2VrSkdRV2xGUVd4TGVXTk5Ra015Y1N0UlRTdHRZM1EyTUZKT1JVNTRjRlZTU0dWek5uWm5UMEpYWkhnM01WaGpXR2REU1VGMGJncE5lbmN2WTBKM05XZ3dhSEpaU2poaU1WQkthbTk0YmpOck1VNHlWR1JuYjJaeGRrMW9ZbE5VVFVGdlIwTkRjVWRUVFRRNVFrRk5SRUV5WjBGTlIxVkRDazFSUXpKTFRFWlpVMmxFTHl0VE1WZEZjM2xtT1dONlpqVXlkeXRGTlRjM1NHazNOM0k0Y0VkVlRURnlVUzlDZW1jeFlVZDJVWE13TDJ0Qlp6TlRMMG9LVTBSblEwMUZaRTQxWkVsVE1IUlNiVEZUVDAxaVQwWmpWeXN4ZVhwU0swOXBRMVpLTjBSV1JuZFZaRWt6UkM4M1JWSjRkRTQ1WlM5TVNqWjFZVkp1VWdvdlUyRnVjbmM5UFFvdExTMHRMVVZPUkNCRFJWSlVTVVpKUTBGVVJTMHRMUzB0Q2c9PSJ9fX19',
      },
    ],
    timestampVerificationData: { rfc3161Timestamps: [] },
  },
  messageSignature: {
    messageDigest: {
      algorithm: 'SHA2_256',
      digest: 'aOZWslHmfoNYvvhIOrDVHGYZ8+ehqfDnWDjUH/No9yg=',
    },
    signature:
      'MEQCIHs5aUulq1HpR+fwmSKpLk/oAwq5O9CDNFHhZAKfG5GmAiBwcVnf2obzsCGVlf0AIvbvHr21NXt7tpLBl4+Brh6OKA==',
  },
};

// Invalid DSSE bundle - the signature in the canonicalized tlog body doesn't
// match the signature in the DSSE envelope.
const invalidIncorrectSigInTLogBody = {
  mediaType: 'application/vnd.dev.sigstore.bundle+json;version=0.1',
  verificationMaterial: {
    x509CertificateChain: {
      certificates: [
        {
          rawBytes:
            'MIICoDCCAiagAwIBAgIUevae+nLQ8mg6OyOB43MKJ10F2CEwCgYIKoZIzj0EAwMwNzEVMBMGA1UEChMMc2lnc3RvcmUuZGV2MR4wHAYDVQQDExVzaWdzdG9yZS1pbnRlcm1lZGlhdGUwHhcNMjIxMTA5MDEzMzA5WhcNMjIxMTA5MDE0MzA5WjAAMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE9DbYBIMQLtWb6J5gtL69jgRwwEfdtQtKvvG4+o3ZzlOroJplpXaVgF6wBDob++rNG9/AzSaBmApkEwI52XBjWqOCAUUwggFBMA4GA1UdDwEB/wQEAwIHgDATBgNVHSUEDDAKBggrBgEFBQcDAzAdBgNVHQ4EFgQUVIIFc08z6uV9Y96S+v5oDbbmHEYwHwYDVR0jBBgwFoAU39Ppz1YkEZb5qNjpKFWixi4YZD8wHwYDVR0RAQH/BBUwE4ERYnJpYW5AZGVoYW1lci5jb20wLAYKKwYBBAGDvzABAQQeaHR0cHM6Ly9naXRodWIuY29tL2xvZ2luL29hdXRoMIGKBgorBgEEAdZ5AgQCBHwEegB4AHYA3T0wasbHETJjGR4cmWc3AqJKXrjePK3/h4pygC8p7o4AAAGEWgUGQwAABAMARzBFAiEAlKycMBC2q+QM+mct60RNENxpURHes6vgOBWdx71XcXgCIAtnMzw/cBw5h0hrYJ8b1PJjoxn3k1N2TdgofqvMhbSTMAoGCCqGSM49BAMDA2gAMGUCMQC2KLFYSiD/+S1WEsyf9czf52w+E577Hi77r8pGUM1rQ/Bzg1aGvQs0/kAg3S/JSDgCMEdN5dIS0tRm1SOMbOFcW+1yzR+OiCVJ7DVFwUdI3D/7ERxtN9e/LJ6uaRnR/Sanrw==',
        },
        {
          rawBytes:
            'MIICGjCCAaGgAwIBAgIUALnViVfnU0brJasmRkHrn/UnfaQwCgYIKoZIzj0EAwMwKjEVMBMGA1UEChMMc2lnc3RvcmUuZGV2MREwDwYDVQQDEwhzaWdzdG9yZTAeFw0yMjA0MTMyMDA2MTVaFw0zMTEwMDUxMzU2NThaMDcxFTATBgNVBAoTDHNpZ3N0b3JlLmRldjEeMBwGA1UEAxMVc2lnc3RvcmUtaW50ZXJtZWRpYXRlMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE8RVS/ysH+NOvuDZyPIZtilgUF9NlarYpAd9HP1vBBH1U5CV77LSS7s0ZiH4nE7Hv7ptS6LvvR/STk798LVgMzLlJ4HeIfF3tHSaexLcYpSASr1kS0N/RgBJz/9jWCiXno3sweTAOBgNVHQ8BAf8EBAMCAQYwEwYDVR0lBAwwCgYIKwYBBQUHAwMwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQU39Ppz1YkEZb5qNjpKFWixi4YZD8wHwYDVR0jBBgwFoAUWMAeX5FFpWapesyQoZMi0CrFxfowCgYIKoZIzj0EAwMDZwAwZAIwPCsQK4DYiZYDPIaDi5HFKnfxXx6ASSVmERfsynYBiX2X6SJRnZU84/9DZdnFvvxmAjBOt6QpBlc4J/0DxvkTCqpclvziL6BCCPnjdlIB3Pu3BxsPmygUY7Ii2zbdCdliiow=',
        },
        {
          rawBytes:
            'MIIB9zCCAXygAwIBAgIUALZNAPFdxHPwjeDloDwyYChAO/4wCgYIKoZIzj0EAwMwKjEVMBMGA1UEChMMc2lnc3RvcmUuZGV2MREwDwYDVQQDEwhzaWdzdG9yZTAeFw0yMTEwMDcxMzU2NTlaFw0zMTEwMDUxMzU2NThaMCoxFTATBgNVBAoTDHNpZ3N0b3JlLmRldjERMA8GA1UEAxMIc2lnc3RvcmUwdjAQBgcqhkjOPQIBBgUrgQQAIgNiAAT7XeFT4rb3PQGwS4IajtLk3/OlnpgangaBclYpsYBr5i+4ynB07ceb3LP0OIOZdxexX69c5iVuyJRQ+Hz05yi+UF3uBWAlHpiS5sh0+H2GHE7SXrk1EC5m1Tr19L9gg92jYzBhMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBRYwB5fkUWlZql6zJChkyLQKsXF+jAfBgNVHSMEGDAWgBRYwB5fkUWlZql6zJChkyLQKsXF+jAKBggqhkjOPQQDAwNpADBmAjEAj1nHeXZp+13NWBNa+EDsDP8G1WWg1tCMWP/WHPqpaVo0jhsweNFZgSs0eE7wYI4qAjEA2WB9ot98sIkoF3vZYdd3/VtWB5b9TNMea7Ix/stJ5TfcLLeABLE4BNJOsQ4vnBHJ',
        },
      ],
    },
    tlogEntries: [
      {
        logIndex: '6757613',
        logId: { keyId: 'wNI9atQGlz+VWfO6LRygH4QUfY/8W4RFwiT5i5WRgB0=' },
        kindVersion: { kind: 'hashedrekord', version: '0.0.1' },
        integratedTime: '1667957815',
        inclusionPromise: {
          signedEntryTimestamp:
            'MEUCIAYvbx7NcxZ2otyk7pC5e95d4mVPq69Eq5qZQkYiis1pAiEAjJRarlKyf7QLnuAosWpYR9G2CM08EGZ3JQJ0+Pw0Cqo=',
        },
        canonicalizedBody:
          'eyJhcGlWZXJzaW9uIjoiMC4wLjEiLCJraW5kIjoiaGFzaGVkcmVrb3JkIiwic3BlYyI6eyJkYXRhIjp7Imhhc2giOnsiYWxnb3JpdGhtIjoic2hhMjU2IiwidmFsdWUiOiI2OGU2NTZiMjUxZTY3ZTgzNThiZWY4NDgzYWIwZDUxYzY2MTlmM2U3YTFhOWYwZTc1ODM4ZDQxZmYzNjhmNzI4In19LCJzaWduYXR1cmUiOnsiY29udGVudCI6Ik1FVUNJUUNTVzlWWDI4VGw5RnlKM3ZBY2xaMUc0RFQrcXh5aVVlaThEM2tBZU5KYjR3SWdmVXdEQ0NYdkdQbCtLYWQzSUVjdEYvSFlKRUdJKzRkVDlGYXlPVzlxc0xRPSIsInB1YmxpY0tleSI6eyJjb250ZW50IjoiTFMwdExTMUNSVWRKVGlCRFJWSlVTVVpKUTBGVVJTMHRMUzB0Q2sxSlNVTnZSRU5EUVdsaFowRjNTVUpCWjBsVlZERjRZV0o1VkZWdWJWQkxOMUpvZGxWTllrOUhTRmhTVmsxWmQwTm5XVWxMYjFwSmVtb3dSVUYzVFhjS1RucEZWazFDVFVkQk1WVkZRMmhOVFdNeWJHNWpNMUoyWTIxVmRWcEhWakpOVWpSM1NFRlpSRlpSVVVSRmVGWjZZVmRrZW1SSE9YbGFVekZ3WW01U2JBcGpiVEZzV2tkc2FHUkhWWGRJYUdOT1RXcEplRTFVUVRWTlJFVjZUbXBWTUZkb1kwNU5ha2w0VFZSQk5VMUVSVEJPYWxVd1YycEJRVTFHYTNkRmQxbElDa3R2V2tsNmFqQkRRVkZaU1V0dldrbDZhakJFUVZGalJGRm5RVVZWUkRGVFVHOU1SQ3Q0VlhVellVNHdUV0l4WlVOcVVrWkRTMGhWWTJ0Vk1WRlBWV29LYnpSQlRVUTBlUzlCTmxSclpHa3ZXbmRPZWxkeGR6aDBhM2h3ZVZBM2MwNXlieTl5UlhOR1UwVlRSMjlwYkZZemQzRlBRMEZWVlhkblowWkNUVUUwUndwQk1WVmtSSGRGUWk5M1VVVkJkMGxJWjBSQlZFSm5UbFpJVTFWRlJFUkJTMEpuWjNKQ1owVkdRbEZqUkVGNlFXUkNaMDVXU0ZFMFJVWm5VVlZvTVRkckNtOTZVUzlVZFU4dlVVTXJkakpsWldGMFIwRTNURVpyZDBoM1dVUldVakJxUWtKbmQwWnZRVlV6T1ZCd2VqRlphMFZhWWpWeFRtcHdTMFpYYVhocE5Ga0tXa1E0ZDBoM1dVUldVakJTUVZGSUwwSkNWWGRGTkVWU1dXNUtjRmxYTlVGYVIxWnZXVmN4YkdOcE5XcGlNakIzVEVGWlMwdDNXVUpDUVVkRWRucEJRZ3BCVVZGbFlVaFNNR05JVFRaTWVUbHVZVmhTYjJSWFNYVlpNamwwVERKNGRsb3liSFZNTWpsb1pGaFNiMDFKUjB0Q1oyOXlRbWRGUlVGa1dqVkJaMUZEQ2tKSWQwVmxaMEkwUVVoWlFUTlVNSGRoYzJKSVJWUktha2RTTkdOdFYyTXpRWEZLUzFoeWFtVlFTek12YURSd2VXZERPSEEzYnpSQlFVRkhSVmRuYURBS2NrRkJRVUpCVFVGU2VrSkdRV2xCTDB3d1NHWlROV2hUTVN0RFpFUk9URmw1Y21adGFIaFRXa3d6UVRadU9HNVBlVEF3WkVKdmR5dGlVVWxvUVV0UU5ncHBNREZsVEdaU2VpdExhbVZHVm5KblpsSlBTRzlMVEc5NlpHTlhlWFk1YzFjclZrWk1VV0p4VFVGdlIwTkRjVWRUVFRRNVFrRk5SRUV5WjBGTlIxVkRDazFSUkhOSFZXNHJhMHRVV1hkclVuZHdSM2MzTVZFcmJuZGxkMnRxSzJOaFpVRmlNMUZYSzJSa2JqUTJSVFF4ZDBORmEya3ZXVlIyTUZWek0yaHFVRW9LVjJkRlEwMUNNazVYVVdkdmNXRkRVVmg0TjFwUk4xZFRZelJuVEZOc1dERnNhM0ZyVGtsbVRXdHBWVzFpZEhaMVZXRllWRkZGWTBkeE1FUnROemh2ZWdwTlNIbEhWbEU5UFFvdExTMHRMVVZPUkNCRFJWSlVTVVpKUTBGVVJTMHRMUzB0Q2c9PSJ9fX19',
      },
    ],
    timestampVerificationData: { rfc3161Timestamps: [] },
  },
  messageSignature: {
    messageDigest: {
      algorithm: 'SHA2_256',
      digest: 'aOZWslHmfoNYvvhIOrDVHGYZ8+ehqfDnWDjUH/No9yg=',
    },
    signature:
      'MEQCIHs5aUulq1HpR+fwmSKpLk/oAwq5O9CDNFHhZAKfG5GmAiBwcVnf2obzsCGVlf0AIvbvHr21NXt7tpLBl4+Brh6OKA==',
  },
};

export default {
  publicKey,
  artifact: Buffer.from('hello, world!'),
  valid: {
    withSigningCert: validBundleWithSigningCert,
    withPublicKey: validBundleWithPublicKey,
  },
  invalid: {
    expiredCert: invalidExpiredCert,
    setMismatch: invalidSET,
    setMissing: invalidMissingSET,
    tlogVersionMismatch: invalidTLogVersionMismatch,
    tlogIncorrectSigInBody: invalidIncorrectSigInTLogBody,
  },
};
