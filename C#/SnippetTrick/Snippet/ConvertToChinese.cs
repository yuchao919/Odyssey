using System;
using System.Text.RegularExpressions;

namespace SnippetTrick
{
    public partial class Snippet
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="number"></param>
        /// <returns></returns>
        public static String ConvertToChinese(Decimal number)
        {
            //作者：苏博
            //链接：https://www.zhihu.com/question/37926400/answer/74142424
            //来源：知乎
            //著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
            var s = number.ToString("#L#E#D#C#K#E#D#C#J#E#D#C#I#E#D#C#H#E#D#C#G#E#D#C#F#E#D#C#.0B0A");
            var d = Regex.Replace(s, @"((?<=-|^)[^1-9]*)|((?'z'0)[0A-E]*((?=[1-9])|(?'-z'(?=[F-L\.]|$))))|((?'b'[F-L])(?'z'0)[0A-L]*((?=[1-9])|(?'-z'(?=[\.]|$))))", "${b}${z}");
            var r = Regex.Replace(d, ".", m => "负元空零壹贰叁肆伍陆柒捌玖空空空空空空空分角拾佰仟万亿兆京垓秭穰"[m.Value[0] - '-'].ToString());
            if (r.EndsWith("元"))//这两行是我加的
                r += "整";//感觉我拉低了前边代码的逼格……很惭愧
            return r;
        }
    }
}
