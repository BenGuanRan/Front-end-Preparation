{
    "targets": [
        {
            "target_name": "make",
            "cflags!": ["-fno-exceptions"],
            "cflags_cc!": ["-fno-exceptions"],
            "sources": [
                "./src/get_mem_data.cpp",
                "./src/index.cpp"
            ],
            "include_dirs": [
                "<!@(node -p \"require('node-addon-api').include\")"
            ],
            'defines': [
                'NAPI_DISABLE_CPP_EXCEPTIONS'
            ],
        }
    ]
}
