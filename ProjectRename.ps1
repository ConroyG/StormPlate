param (
    [string]$newProjectName = $( Read-Host "New Project Name" ),
    [string]$oldProjectName = 'StormPlate'#'Stormlight.Template'
)
$location = Get-Location

Get-ChildItem  -Recurse  $location |select Fullname, Name | `
Foreach-Object{
    #$content = Get-Content $_.FullName
    if(Test-Path $_.FullName -pathType container)
    {
        $newName = $_.Name -replace $oldProjectName,$newProjectName
        if ($newName -ne $_.Name)
        {
            Rename-Item $_.FullName -NewName $newName
        }
    }
    if(Test-Path $_.FullName -pathType leaf)
    {
        if ($_.FullName -match ".cs|.csproj|asax|.config|.html|.js|.ts|.cshtml|.kproj|.json")
        {
            $content = (gc $_.FullName)
            if (-NOT [string]::IsNullOrEmpty($content))
            {
                $content.replace($oldProjectName,$newProjectName)|sc $_.FullName

                $newName = $_.Name -replace $oldProjectName,$newProjectName
                if ($newName -ne $_.Name)
                {
                    Rename-Item $_.FullName -NewName $newName
                }
            }
        }
    }
    #filter and save content to the original file
    #$content | Where-Object {$_ -match 'step[49]'} | Set-Content $_.FullName

    #filter and save content to a new file 
    #$content | Where-Object {$_ -match 'step[49]'} | Set-Content `
                                                         #($_.BaseName+'_out.log')
}