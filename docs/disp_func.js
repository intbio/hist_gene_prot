<!--- <script type="text/javascript"> --->
    function format_variant(variant){
        var exclude_variants = ['', 'H1', 'H1.1', 'H1.2', 'H1.3', 'H1.4', 'H1.5', 'H10', 'H2.1', 'H2.2', 'H2A.2', 'H2A.J',
                                'H2B.M', 'H2B.S', '?'];
        var variants_dict = {'cenH3_CENPA': 'cenH3',
                             'TS_H2A.1': 'H2A.1',
                             'TS_H2B.1': 'H2B.1',
                             'canonical_H3.1': 'canonical_H3',
                             'canonical_H3.2': 'canonical_H3',
                             'H2A.B.1': 'H2A.B',
                             'H2A.B.2': 'H2A.B',
                             'H2A.B.3': 'H2A.B',
                             'H2A.Z.1': 'H2A.Z',
                             'H2A.Z.2': 'H2A.Z',
                             'H3.Y.1': 'H3.Y',
                             'H3.Y.2': 'H3.Y',
                             'macroH2A.1': 'macroH2A',
                             'macroH2A.2': 'macroH2A'}
        if (!exclude_variants.includes(variant.replace(/ /g, '_')))
            if (variant.replace(/ /g, '_') in variants_dict)
                return "<a href='/variant/" + variants_dict[variant.replace(/ /g, '_')] + "'>" + variant + "</a>";
            else
                return "<a href='/variant/" + variant.replace(/ /g, '_') + "'>" + variant + "</a>";
        else
            return variant;
    };
    function format_type(histone_type){
        if (histone_type)
            return "<a href='/type/" + histone_type + "'>" + histone_type + "</a>";
        else
            return histone_type;
    };
    function format_ncbi(ncbi_id){
        if (ncbi_id)
            return "<a href='https://www.ncbi.nlm.nih.gov/gene/" + ncbi_id + "'>" + ncbi_id + "</a>";
        else
            return ncbi_id;
    };
    function format_hgnc(hgnc_symbol){
        var hgnc_dict = {'H1-0': 'HGNC:4714',
                         'H1-1': 'HGNC:4715',
                         'H1-2': 'HGNC:4716',
                         'H1-3': 'HGNC:4717',
                         'H1-4': 'HGNC:4718',
                         'H1-5': 'HGNC:4719',
                         'H1-6': 'HGNC:4720',
                         'H1-7': 'HGNC:24893',
                         'H1-8': 'HGNC:18463',
                         'H1-9P': 'HGNC:30616',
                         'H1-10': 'HGNC:4722',
                         'H2AC1': 'HGNC:18729',
                         'H2AC4': 'HGNC:4734',
                         'H2AC6': 'HGNC:4733',
                         'H2AC7': 'HGNC:4729',
                         'H2AC8': 'HGNC:4724',
                         'H2AC11': 'HGNC:4737',
                         'H2AC12': 'HGNC:13671',
                         'H2AC13': 'HGNC:4725',
                         'H2AC14': 'HGNC:4727',
                         'H2AC15': 'HGNC:4726',
                         'H2AC16': 'HGNC:4730',
                         'H2AC17': 'HGNC:4735',
                         'H2AC18': 'HGNC:4736',
                         'H2AC19': 'HGNC:29668',
                         'H2AC20': 'HGNC:4738',
                         'H2AC21': 'HGNC:20508',
                         'H2AJ': 'HGNC:14456',
                         'H2AW': 'HGNC:20507',
                         'H2AX': 'HGNC:4739',
                         'H2AZ1': 'HGNC:4741',
                         'H2AZ2': 'HGNC:20664',
                         'MACROH2A1': 'HGNC:4740',
                         'MACROH2A2': 'HGNC:14453',
                         'H2AB1': 'HGNC:22516',
                         'H2AB2': 'HGNC:18298',
                         'H2AB3': 'HGNC:14455',
                         'H2AP': 'HGNC:18417',
                         'H2BC1': 'HGNC:18730',
                         'H2BC3': 'HGNC:4751',
                         'H2BC4': 'HGNC:4757',
                         'H2BC5': 'HGNC:4747',
                         'H2BC6': 'HGNC:4753',
                         'H2BC7': 'HGNC:4752',
                         'H2BC8': 'HGNC:4746',
                         'H2BC9': 'HGNC:4755',
                         'H2BC10': 'HGNC:4756',
                         'H2BC11': 'HGNC:4761',
                         'H2BC12': 'HGNC:13954',
                         'H2BC13': 'HGNC:4748',
                         'H2BC14': 'HGNC:4750',
                         'H2BC15': 'HGNC:4749',
                         'H2BC17': 'HGNC:4758',
                         'H2BC18': 'HGNC:24700',
                         'H2BC21': 'HGNC:4760',
                         'H2BS1': 'HGNC:4762',
                         'H2BU1': 'HGNC:20514',
                         'H2BW1': 'HGNC:27252',
                         'H2BW2': 'HGNC:27867',
                         'H2BP6': 'HGNC:42633',
                         'H2BE1': 'HGNC:53833',
                         'H3C1': 'HGNC:4766',
                         'H3C2': 'HGNC:4776',
                         'H3C3': 'HGNC:4768',
                         'H3C4': 'HGNC:4767',
                         'H3C6': 'HGNC:4769',
                         'H3C7': 'HGNC:4773',
                         'H3C8': 'HGNC:4772',
                         'H3C10': 'HGNC:4775',
                         'H3C11': 'HGNC:4771',
                         'H3C12': 'HGNC:4774',
                         'H3C13': 'HGNC:25311',
                         'H3C14': 'HGNC:20503',
                         'H3C15': 'HGNC:20505',
                         'H3Y1': 'HGNC:43735',
                         'H3Y2': 'HGNC:43734',
                         'H3-2': 'HGNC:32060',
                         'H3-3A': 'HGNC:4764',
                         'H3-3B': 'HGNC:4765',
                         'H3-4': 'HGNC:4778',
                         'H3-5': 'HGNC:33164',
                         'CENPA': 'HGNC:1851',
                         'H4C1': 'HGNC:4781',
                         'H4C2': 'HGNC:4789',
                         'H4C3': 'HGNC:4787',
                         'H4C4': 'HGNC:4782',
                         'H4C5': 'HGNC:4790',
                         'H4C6': 'HGNC:4783',
                         'H4C7': 'HGNC:4792',
                         'H4C8': 'HGNC:4788',
                         'H4C9': 'HGNC:4793',
                         'H4C11': 'HGNC:4785',
                         'H4C12': 'HGNC:4784',
                         'H4C13': 'HGNC:4791',
                         'H4C14': 'HGNC:4794',
                         'H4C15': 'HGNC:29607',
                         'H4-16': 'HGNC:20510'}
        if (hgnc_symbol)
            return "<a href='https://www.genenames.org/data/gene-symbol-report/#!/hgnc_id/" + hgnc_dict[hgnc_symbol] + "'>" + hgnc_symbol + "</a>";
        else
            return hgnc_symbol;
    };
    function format_ensg(ensg_id){
        if (ensg_id)
            return "<a href='https://www.ensembl.org/Homo_sapiens/Gene/Summary?db=core;g=" + ensg_id + "'>" + ensg_id + "</a>";
        else
            return ensg_id;
    };
    function format_enst(enst_id){
        if (enst_id)
            return "<a href='https://www.ensembl.org/Homo_sapiens/Transcript/Summary?db=core;t=" + enst_id + "'>" + enst_id + "</a>";
        else
            return enst_id;
    };
    function format_ncbi_mrna(refseq_id){
        if (refseq_id)
            return "<a href='https://www.ncbi.nlm.nih.gov/nuccore/" + refseq_id + "'>" + refseq_id + "</a>";
        else
            return refseq_id;
    };
    function format_ncbi_peptide(refseq_id){
        if (refseq_id)
            return "<a href='https://www.ncbi.nlm.nih.gov/protein/" + refseq_id + "'>" + refseq_id + "</a>";
        else
            return refseq_id;
    };
    CsvToHtmlTable.init({
        csv_path: "https://intbio.org/hist_gene_prot/human_histones.csv",
        element: 'table-container',
        allow_download: true,
        csv_options: {separator: ',', delimiter: '"'},
        datatables_options: {"paging": false} ,
        custom_formatting: [[0, format_type], [1, format_variant], [2, format_hgnc], [3, format_ncbi], [4, format_ensg],
                            [5, format_enst], [6, format_ncbi_mrna], [7, format_ncbi_peptide]]
    });
<!--- </script> --->
