#include <napi.h>
#include <string>
#include "get_mem_data.h"

Napi::String make_metrication(const Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();
    std::string user = (std::string)info[0].ToString();
    std::string result = helloUser(user);
    return Napi::String::New(env, result);
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
    exports.Set(
        Napi::String::New(env, "make_metrication"),
        Napi::Function::New(env, make_metrication));

    return exports;
}

NODE_API_MODULE(make, Init)